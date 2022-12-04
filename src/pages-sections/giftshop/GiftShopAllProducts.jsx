import { Box, Button, Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";
import React, {useEffect, useState} from "react";
import parse from 'html-dom-parser';
import axios from "axios";

const GiftShopAllProducts = ({ productsData }) => {
    const [data,setData] = useState([])
    const domainUrl = "https://lampinboxportal.azurewebsites.net";
    const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-all-products";
    useEffect(()=>{
        axios.post(url,{
            "requestParameters": {
                "SearchTerm": "",
                "SizeID": null,
                "ColorID": null,
                "CategoryID": null,
                "TagID": null,
                "ManufacturerID": null,
                "MinPrice": null,
                "MaxPrice": null,
                "Rating": null,
                "OrderByColumnName": 0,
                "PageNo": 1,
                "PageSize": 5,
                "recordValueJson": "[]"
            }
        }).then(res=>{
            console.log('response',JSON.parse(res.data.data))
            setData(JSON.parse(res.data.data));
            console.log(JSON.parse(res.data.data)[1].Price)
        }).catch(e=>{
            console.log('error',e)
        })

    },[])
  return (
    <CategorySectionCreator title="All Products" seeMoreLink="#">
      <Grid container mb={-0.5} spacing={3}>
        {data.map((item, ind) => (
          <Grid key={ind} item md={3} sm={6} xs={12}>
            <ProductCard16
              id={item.ProductId}
              imgUrl={`${domainUrl}${item.ProductImagesJson[0].AttachmentURL}`}
              title={item.ProductName}
              rating={item.Rating}
              price={item.Price}
              off={item.IsDiscountAllowed?10:0}
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
