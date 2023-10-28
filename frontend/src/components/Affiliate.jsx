import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react'; // Import Box and Text components
import { Image } from '@chakra-ui/react'; // Import Image component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Affiliate = () => {
  const navigate = useNavigate(); // Define navigate here

  const affiliateData = [

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 10.50.35 PM.jpeg',
      productLink: 'https://www.amazon.in/Van-Heusen-Mens-Shirt-VHSFRSLBR46677_Beige/dp/B0B5YFCFLY?crid=12B3PJDYY0NJK&keywords=mens+branded+shirts&qid=1696353019&sprefix=Mens+branded%2Caps%2C358&sr=8-17&linkCode=ll1&tag=nikhilpawar0c-21&linkId=b3b3c19ef57ade46281d287ac3b93466&language=en_IN&ref_=as_li_ss_tl',
      title: 'Van Heusen Formal Shirt',
      affiliateLink: 'https://www.amazon.in/Van-Heusen-Mens-Shirt-VHSFRSLBR46677_Beige/dp/B0B5YFCFLY?crid=12B3PJDYY0NJK&keywords=mens+branded+shirts&qid=1696353019&sprefix=Mens+branded%2Caps%2C358&sr=8-17&linkCode=ll1&tag=nikhilpawar0c-21&linkId=b3b3c19ef57ade46281d287ac3b93466&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 10.57.34 PM.jpeg',
      productLink: 'https://www.amazon.in/Allen-Solly-Solid-Shirt-ASSFQMOP739544_White/dp/B0B9S5ZFX5?crid=12B3PJDYY0NJK&keywords=mens+branded+shirts&qid=1696353691&refinements=p_n_feature_nineteen_browse-bin%3A11301357031&rnid=11301356031&s=apparel&sprefix=Mens+branded%2Caps%2C358&sr=1-34&linkCode=ll1&tag=nikhilpawar0c-21&linkId=aee0879f7f1026a56efdcf67813f9b3f&language=en_IN&ref_=as_li_ss_tl',
      title: 'Allen Solly Men Shirt',
      affiliateLink: 'https://www.amazon.in/Allen-Solly-Solid-Shirt-ASSFQMOP739544_White/dp/B0B9S5ZFX5?crid=12B3PJDYY0NJK&keywords=mens+branded+shirts&qid=1696353691&refinements=p_n_feature_nineteen_browse-bin%3A11301357031&rnid=11301356031&s=apparel&sprefix=Mens+branded%2Caps%2C358&sr=1-34&linkCode=ll1&tag=nikhilpawar0c-21&linkId=aee0879f7f1026a56efdcf67813f9b3f&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.02.00 PM.jpeg',
      productLink: 'https://www.amazon.in/U-S-POLO-ASSN-Regular-USSHTR0034_Maroon_M/dp/B0B9XZVL77?crid=12B3PJDYY0NJK&keywords=mens+branded+shirts&qid=1696353691&refinements=p_n_feature_nineteen_browse-bin%3A11301357031&rnid=11301356031&s=apparel&sprefix=Mens+branded%2Caps%2C358&sr=1-43&linkCode=ll1&tag=nikhilpawar0c-21&linkId=2bfdc011202ed7426581aaf381f0e6ae&language=en_IN&ref_=as_li_ss_tl',
      title: 'U.S. Polo Men Shirt',
      affiliateLink: 'https://www.amazon.in/U-S-POLO-ASSN-Regular-USSHTR0034_Maroon_M/dp/B0B9XZVL77?crid=12B3PJDYY0NJK&keywords=mens+branded+shirts&qid=1696353691&refinements=p_n_feature_nineteen_browse-bin%3A11301357031&rnid=11301356031&s=apparel&sprefix=Mens+branded%2Caps%2C358&sr=1-43&linkCode=ll1&tag=nikhilpawar0c-21&linkId=2bfdc011202ed7426581aaf381f0e6ae&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.07.45 PM.jpeg',
      productLink: 'https://www.amazon.in/Raymond-Pleat-Front-Formal-Trousers-RMTS02827-K7_Black_96/dp/B07D43Y5MT?keywords=trousers&qid=1696354383&refinements=p_89%3ARaymond&rnid=3837712031&s=apparel&sr=1-11&linkCode=ll1&tag=nikhilpawar0c-21&linkId=ef09077950f1d78df3093d18e00827f4&language=en_IN&ref_=as_li_ss_tl',
      title: 'Pleat Trouser',
      affiliateLink: 'https://www.amazon.in/Raymond-Pleat-Front-Formal-Trousers-RMTS02827-K7_Black_96/dp/B07D43Y5MT?keywords=trousers&qid=1696354383&refinements=p_89%3ARaymond&rnid=3837712031&s=apparel&sr=1-11&linkCode=ll1&tag=nikhilpawar0c-21&linkId=ef09077950f1d78df3093d18e00827f4&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.19.28 PM.jpeg',
      productLink: 'https://www.amazon.in/Peter-England-Utility-Pants-PETFONSPY44152_Cream_30/dp/B0BKQ6BKT2?keywords=trousers&qid=1696355081&refinements=p_89%3APeter+England&rnid=3837712031&s=apparel&sr=1-14&linkCode=ll1&tag=nikhilpawar0c-21&linkId=6b6b4c6fd8018520f3e6e733dc7c3a3b&language=en_IN&ref_=as_li_ss_tl',
      title: 'Peter England Pants',
      affiliateLink: 'https://www.amazon.in/Peter-England-Utility-Pants-PETFONSPY44152_Cream_30/dp/B0BKQ6BKT2?keywords=trousers&qid=1696355081&refinements=p_89%3APeter+England&rnid=3837712031&s=apparel&sr=1-14&linkCode=ll1&tag=nikhilpawar0c-21&linkId=6b6b4c6fd8018520f3e6e733dc7c3a3b&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.30.24 PM.jpeg',
      productLink: 'https://www.amazon.in/BIBA-Womens-straight-TUNE-MAROON_/dp/B08D737NLX?crid=2QJA3X1IEYHCY&keywords=womens+clothes+branded&qid=1696355621&refinements=p_89%3ABIBA&rnid=3837712031&s=apparel&sprefix=womens+clothes+branded%2Cfashion%2C247&sr=1-10&linkCode=ll1&tag=nikhilpawar0c-21&linkId=a2012f73ac11644a1d970b93f020b3f2&language=en_IN&ref_=as_li_ss_tl',
      title: 'Cotton Fusion Wear Kurti',
      affiliateLink: 'https://www.amazon.in/BIBA-Womens-straight-TUNE-MAROON_/dp/B08D737NLX?crid=2QJA3X1IEYHCY&keywords=womens+clothes+branded&qid=1696355621&refinements=p_89%3ABIBA&rnid=3837712031&s=apparel&sprefix=womens+clothes+branded%2Cfashion%2C247&sr=1-10&linkCode=ll1&tag=nikhilpawar0c-21&linkId=a2012f73ac11644a1d970b93f020b3f2&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.42.28 PM.jpeg',
      productLink: 'https://www.amazon.in/BE-SAVAGE-shoulder-letterman-varsity/dp/B0BD7H538N?crid=1CKFQYK8QNESA&keywords=h%26m+women&qid=1696356479&s=apparel&sprefix=h%26m+twomen%2Cfashion%2C593&sr=1-10&linkCode=ll1&tag=nikhilpawar0c-21&linkId=914f68369411aa3ff23cfcb9e87f8a4f&language=en_IN&ref_=as_li_ss_tl',
      title: 'Varsity Jacket',
      affiliateLink: 'https://www.amazon.in/BE-SAVAGE-shoulder-letterman-varsity/dp/B0BD7H538N?crid=1CKFQYK8QNESA&keywords=h%26m+women&qid=1696356479&s=apparel&sprefix=h%26m+twomen%2Cfashion%2C593&sr=1-10&linkCode=ll1&tag=nikhilpawar0c-21&linkId=914f68369411aa3ff23cfcb9e87f8a4f&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.48.32 PM.jpeg',
      productLink: 'https://www.amazon.in/Zeel-Clothing-Embroidered-Lehenga-540-Yellow-Wedding-Bridal-Latest-New/dp/B0CC8L6XD5?crid=1PSJD3T8E8FXA&keywords=zara+tops+for+women&nsdOptOutParam=true&qid=1696356820&refinements=p_89%3AZeel+Clothing&rnid=3837712031&s=apparel&sprefix=zara%2Cfashion%2C496&sr=1-10&linkCode=ll1&tag=nikhilpawar0c-21&linkId=a95fa81c9466e4dcf48cc9e092a45390&language=en_IN&ref_=as_li_ss_tl',
      title: 'Clothing Embroidered Lehenga',
      affiliateLink: 'https://www.amazon.in/Zeel-Clothing-Embroidered-Lehenga-540-Yellow-Wedding-Bridal-Latest-New/dp/B0CC8L6XD5?crid=1PSJD3T8E8FXA&keywords=zara+tops+for+women&nsdOptOutParam=true&qid=1696356820&refinements=p_89%3AZeel+Clothing&rnid=3837712031&s=apparel&sprefix=zara%2Cfashion%2C496&sr=1-10&linkCode=ll1&tag=nikhilpawar0c-21&linkId=a95fa81c9466e4dcf48cc9e092a45390&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.53.44 PM.jpeg',
      productLink: 'https://www.amazon.in/Zeel-Clothing-Chikankari-Embroidered-2103-Pink-Wedding-Bridal-Latest-New/dp/B0CCJ7295M?crid=1PSJD3T8E8FXA&keywords=zara+tops+for+women&nsdOptOutParam=true&qid=1696356820&refinements=p_89%3AZeel+Clothing&rnid=3837712031&s=apparel&sprefix=zara%2Cfashion%2C496&sr=1-14&linkCode=ll1&tag=nikhilpawar0c-21&linkId=2aa89b55d805fab936acdaf751d5bbb5&language=en_IN&ref_=as_li_ss_tl',
      title: 'Pink Wedding Bridal Latest Lehenga',
      affiliateLink: 'https://www.amazon.in/Zeel-Clothing-Chikankari-Embroidered-2103-Pink-Wedding-Bridal-Latest-New/dp/B0CCJ7295M?crid=1PSJD3T8E8FXA&keywords=zara+tops+for+women&nsdOptOutParam=true&qid=1696356820&refinements=p_89%3AZeel+Clothing&rnid=3837712031&s=apparel&sprefix=zara%2Cfashion%2C496&sr=1-14&linkCode=ll1&tag=nikhilpawar0c-21&linkId=2aa89b55d805fab936acdaf751d5bbb5&language=en_IN&ref_=as_li_ss_tl',
    },

    {
      imageUrl:
        'WhatsApp Image 2023-10-03 at 11.59.54 PM.jpeg',
      productLink: 'https://www.amazon.in/Tommy-Hilfiger-Rayon-A9AWV1152_Sky-Captain_2/dp/B07Z83L3XC?pf_rd_i=1953602031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=1953c50c-f664-4abd-8765-7ad5af99eb5a&pf_rd_r=NMKK96N0X71PRJDNG9C7&pf_rd_s=merchandised-search-12&qid=1696357548&refinements=p_89%3ATommy%2BHilfiger%2Cp_85%3A10440599031&rps=1&s=apparel&sr=1-27&th=1&psc=1&linkCode=ll1&tag=nikhilpawar0c-21&linkId=675ac06344166230f2af29b5efa09f3d&language=en_IN&ref_=as_li_ss_tl',
      title: 'Tommy Hilfiger Rayon Mini-Dress',
      affiliateLink: 'https://www.amazon.in/Tommy-Hilfiger-Rayon-A9AWV1152_Sky-Captain_2/dp/B07Z83L3XC?pf_rd_i=1953602031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_p=1953c50c-f664-4abd-8765-7ad5af99eb5a&pf_rd_r=NMKK96N0X71PRJDNG9C7&pf_rd_s=merchandised-search-12&qid=1696357548&refinements=p_89%3ATommy%2BHilfiger%2Cp_85%3A10440599031&rps=1&s=apparel&sr=1-27&th=1&psc=1&linkCode=ll1&tag=nikhilpawar0c-21&linkId=675ac06344166230f2af29b5efa09f3d&language=en_IN&ref_=as_li_ss_tl',
    },



    // Your product data here...
  ];

  const productsPerRow = 3; // Number of products to display in one row
  const cardWidth = '300px'; // Set a fixed card width here
  const cardHeight = '450px'; // Set a fixed card height here
  const imageWidth = '100%'; // Set a fixed image width here
  const imageHeight = '70%'; // Set a fixed image height here

  const renderProducts = () => {
    const productRows = [];
    for (let i = 0; i < affiliateData.length; i += productsPerRow) {
      const row = affiliateData.slice(i, i + productsPerRow);
      productRows.push(row);
    }

    return productRows.map((row, rowIndex) => (
      <Stack
        key={rowIndex}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        align="center"
        justify="center"
      >
        {row.map((item, index) => (
          <Box
            key={index}
            width={cardWidth} // Set a fixed card width
            height={cardHeight} // Set a fixed card height
            bg="#fff"
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            cursor="pointer"
            onClick={() => navigate(item.affiliateLink)}
          >
            <Image
              width={imageWidth} // Set a fixed image width
              height={imageHeight} // Set a fixed image height
              src={item.imageUrl}
              alt={item.title}
              onClick={() => (window.location.href = item.affiliateLink)}
            />
            <Text fontWeight={500} fontSize={26} mt={4}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Stack>
    ));
  };

  return <Stack direction="column" spacing={4} align="center" justify="center">{renderProducts()}</Stack>;
};

export default Affiliate;
