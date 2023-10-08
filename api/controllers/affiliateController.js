const Product = require('../models/AffiliateProduct');

exports.getAllAffiliate = async (req, res) => {
    try {
        const allProducts = await Product.find({});

        res.status(200).json({
            allProducts
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
