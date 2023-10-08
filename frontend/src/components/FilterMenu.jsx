import React, { useEffect } from 'react';
import { Box, Text, Button, Divider, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, RadioGroup, Radio, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';

import { getProductByColor, getProductByGender, getProductByPrice, getProductsByQueries } from '../services/ProductServices';
import { useSearchContext } from '../contexts/SearchContext';

const FilterMenu = ({ openFilter, setProducts, setSortBy }) => {

    const {canSearch,setCanSearch}=useSearchContext();

    const [minPrice, setMinPrice] = useState(350);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [gender, setGender] = useState("all");
    const [color, setColor] = useState("all");

    useEffect(()=>{
        setColor("all");
        setGender("all");
        setMinPrice(350);
        setMaxPrice(10000);
    },[canSearch]);

    const onChangePriceRange = (val) => {
        setCanSearch(false)
        setMinPrice(val[0]);
        setMaxPrice(val[1]);
    };

    const onChangeColor = () => {
        setCanSearch(false);
    };

    const onChangeGender = (e) => {
        setCanSearch(false);
        setGender(e.target.value)
    };

    const onClickSearch = () => {
        setSortBy("recommended");
        if (gender !== "all" && color !== "all") {
            getProductsByQueries(minPrice, maxPrice, gender, color)
                .then(result => {
                    setProducts(result.products);
                });
        } else if (gender !== "all" && color === "all") {
            getProductByGender(gender, minPrice, maxPrice)
                .then((result) => {
                    setProducts(result.products);
                });
        } else if (color !== "all" && gender === "all") {
            getProductByColor(color, minPrice, maxPrice)
                .then((result) => {
                    setProducts(result.products);
                });
        } else {
            getProductByPrice(minPrice, maxPrice)
                .then((result) => {
                    setProducts(result.products);
                });
        }
    };

    return (
        <Box
            display={openFilter ? 'block' : 'none'} minHeight={725} maxHeight={850} p={3} backgroundColor='#fff' maxWidth={400}>
            <Box px={2}>
                <Text fontSize={20} my={3} fontWeight={500} >Price Range</Text>
                <RangeSlider
                    onChangeEnd={onChangePriceRange}
                    defaultValue={[minPrice, maxPrice]}
                    max={10000}
                    min={350}
                >
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack bg='#273E47.500' />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} ><Box color='#273E47.500' fontWeight={800} >₹</Box></RangeSliderThumb>
                    <RangeSliderThumb index={1} ><Box color='#273E47.500' fontWeight={800} >₹</Box></RangeSliderThumb>
                </RangeSlider>
                <Box display='flex' my={3} alignItems='center' justifyContent='space-between'>
                    <Text fontSize={16} fontWeight={600} > ₹ {minPrice}  - ₹ {maxPrice} </Text>

                </Box>
                <Divider mb={3} />
            </Box>
            {/* <Box
                display='flex'
                flexDirection='column'
            >
                <Text fontSize={20} mb={3} fontWeight={500} >Size</Text>
                <Checkbox color='#273E47' value='XS' fontWeight={600} >XS</Checkbox>
                <Checkbox color='#273E47' value='S' fontWeight={600} >S</Checkbox>
                <Checkbox defaultChecked color='#273E47' value='M' fontWeight={600} >M</Checkbox>
                <Checkbox color='#273E47' value='L' fontWeight={600} >L</Checkbox>
                <Checkbox color='#273E47' value='XL' fontWeight={600} >XL</Checkbox>
                <Divider my={3} />
            </Box> */}
            <Box mt={3}>
                <Text fontSize={20} mb={3} fontWeight={500} >Gender</Text>
                <RadioGroup display='flex' justifyContent='space-between' flexDirection={{ base: 'column', md: 'row' }} onChange={setGender} onClick={onChangeGender} value={gender} >
                    <Radio color='#273E47' value='all' fontWeight={600} >All</Radio>
                    <Radio color='#273E47' value='man' fontWeight={600} >Man</Radio>
                    <Radio color='#273E47' value='woman' fontWeight={600} >Woman</Radio>
                    <Radio color='#273E47' value='unisex' fontWeight={600} >Unisex</Radio>
                </RadioGroup>
                <Divider my={3} />
            </Box>
            <Box display='flex'
                flexDirection='column' pb={3}>
               
                <Button mt={5} color='#273E47' onClick={onClickSearch} >Search</Button>
            </Box>
        </Box>
    )
}

export default FilterMenu;