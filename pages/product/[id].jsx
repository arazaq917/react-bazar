import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import { useRouter } from "next/router";
import AvailableShops from "components/products/AvailableShops";
import FrequentlyBought from "components/products/FrequentlyBought";
import ProductDescription from "components/products/ProductDescription";
import ProductIntro from "components/products/ProductIntro";
import ProductReview from "components/products/ProductReview";
import RelatedProducts from "components/products/RelatedProducts";
import { H2 } from "components/Typography";
import bazaarReactDatabase from "data/bazaar-react-database";
import { useEffect, useState } from "react";
import {
  getFrequentlyBought,
  getRelatedProducts,
} from "utils/api/related-products";
import axios from "axios";
const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
})); // ===============================================================

// ===============================================================
const ProductDetails = (props) => {
  // const { frequentlyBought, relatedProducts } = props;
  const [product, setProduct] = useState(bazaarReactDatabase[0]);
  const [selectedOption, setSelectedOption] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [frequentlyBought, setFrequentlyBought] = useState([]);
  const [datal,setData] = useState([props.myProps])

  const domainUrl = "https://lampinboxportal.azurewebsites.net";
  const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-product_detail";
  /**
   * Note:
   * ==============================================================
   * 1. We used client side rendering with dummy fake data for related products and frequently product
   * 2. Product details data is static data, we didn't call any rest api
   * 3. If you fetch data from server we recommended you to call getStaticProps function in below.
   *    The code is commented if want to call it just uncomment code and put the server url
   */

  useEffect(() => {
    // getRelatedProducts().then((data) => setRelatedProducts(data));
    // getFrequentlyBought().then((data) => setFrequentlyBought(data));
    console.log(datal[0][0])

  }, []);

  const handleOptionClick = (_, value) => setSelectedOption(value);

  return (
    <ShopLayout1>
      <Container
        sx={{
          my: 4,
        }}
      >
        {datal ? <ProductIntro product={product} datal={datal[0][0]} /> : <H2>Loading...</H2>}

        <StyledTabs
          textColor="primary"
          value={selectedOption}
          indicatorColor="primary"
          onChange={handleOptionClick}
        >
          <Tab className="inner-tab" label="Description" />
          <Tab className="inner-tab" label="Review (3)" />
        </StyledTabs>

        <Box mb={6}>
          {selectedOption === 0 && <ProductDescription datal={datal[0][0]} />}
          {selectedOption === 1 && <ProductReview />}
        </Box>

        {/*{frequentlyBought && (*/}
        {/*  <FrequentlyBought productsData={frequentlyBought} />*/}
        {/*)}*/}

        {/*<AvailableShops />*/}

        {/*{relatedProducts && <RelatedProducts productsData={relatedProducts} />}*/}
      </Container>
    </ShopLayout1>
  );
}; // export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = bazaarReactDatabase.slice(0, 2).map((pro) => ({ params: { id: pro.id } }));
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };
// export async function getStaticProps() {
//   const frequentlyBought = await getFrequentlyBought();
//   const relatedProducts = await getRelatedProducts();
//   return {
//     props: { frequentlyBought, relatedProducts },
//   };
// }
export async function getServerSideProps(context) {
  const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-product_detail";
  console.log(context.query.id)
  const product = await axios.post(url,{
    "requestParameters":{
      "ProductId":context.query.id,
      "recordValueJson": "[]"
    }
  });
  const myProps =  JSON.parse(product.data.data)
  return {
    props: {myProps}, // will be passed to the page component as props
  }
}
export default ProductDetails;
