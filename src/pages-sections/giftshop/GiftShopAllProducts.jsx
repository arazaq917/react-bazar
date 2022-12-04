import { Box, Button, Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";
import React, {useEffect} from "react";
import parse from 'html-dom-parser';
import axios from "axios";

const GiftShopAllProducts = ({ productsData }) => {
    const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-popular-categories";
    useEffect(()=>{
        let token = sessionStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type':'application/json',
                'X-Response-View':'Json',
            }
    };
        // axios.get(url,config)
        //     .then(res=>{
        //         let htmlData = res.data.trim();
        //         var doc = new DOMParser().parseFromString(htmlData, "text/html");
        //         let newString = doc.querySelector('.page').innerText.trim();
        //         let jsonData = newString.split('\n').filter(f=>f!=='    ');
        //         let tempArr = [];
        //         jsonData.forEach(e=>{
        //             e.trim()
        //             tempArr.push(e)
        //         })
        //         console.log(tempArr)
        //         // let newArr = newString.replace(/(<.*?>)|\s+/g, (m, $1) => $1 ? $1 : ' ');
        //         // newArr = newArr.filter(f=>f!=='\n').join(',');
        //
        //         // console.log('data',`[${newArr.trim()}]`);
        //         // console.log('type',JSON.parse(`[${newArr.trim()}]`));
        //
        //      })
        //     .catch(err=> console.log(err))
    },[])
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <Grid container mb={-0.5} spacing={3}>
        {productsData.map((item, ind) => (
          <Grid key={ind} item md={3} sm={6} xs={12}>
            <ProductCard16
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              rating={item.rating}
              price={item.price}
              off={item.discount}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={6} display="flex" justifyContent="center">
        <Button color="primary" variant="contained">
          Load More...
        </Button>
      </Box>
    </CategorySectionCreator>
  );
};

export default GiftShopAllProducts;
