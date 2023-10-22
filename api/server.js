const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: 'ENV_FILENAME' });
const stripe = require("stripe")('sk_test_51NxPlVSC9F991Uibai3IH1tJRkshsaw2Wif0e0YHqFvqJe0L9Zzs28mbtVJnMJclmfMBVMgVl91VPpfdja9IzMdl00rV4x6Pte');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const genreRoutes = require('./routes/genreRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const commentRoutes = require('./routes/commentRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reportRoutes = require('./routes/reportRoutes');
const imageRoutes = require('./routes/imageRoutes');
const miniImageRoutes = require('./routes/miniImageRoutes');
const affiliate = require('./routes/affiliate');
const Order = require('./models/Order');
const {getAffiliateProductByCategoryId} = require('./controllers/productController');

const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json());
app.get("/try", (a, b) => {
    b.send("hy")
})

// ROUTES
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/genres', genreRoutes);
app.use('/products', productRoutes);
app.use('/ratings', ratingRoutes);
app.use('/comments', commentRoutes);
app.use('/orders', orderRoutes);
app.use('/reports', reportRoutes);
app.use('/images', imageRoutes);
app.use('/minis', miniImageRoutes);
app.get('/products/affiliate/category/:id', getAffiliateProductByCategoryId);


// app.use('/affiliate', affiliate);

// STRIPE CONNECTION
app.post("/create-payment-intent", async (req, res) => {
    const { price } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: Number(price),
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.post("/create-checkout", async (req, res) => {
    const { product } = req.body;
    try {
        // const add=  Order.create(req.body);
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: product.name,
                        },
                        unit_amount: product.price * 100,
                    },
                    quantity: product.quantity,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/cart",
            cancel_url: "http://localhost:3000/login",
        });
        res.json({ id: session.id }); 
    }
    catch (error) {
        console.log(error.message)
    }

    // res.json({ id: session.id }); 
    // console.log(req.body)
});

mongoose.connect("mongodb://127.0.0.1:27017/project", () => {
    console.log('Successfully connected to database.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

