import { Box, Button, Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";
import React, {useEffect, useState} from "react";
import parse from 'html-dom-parser';
import axios from "axios";

const GiftShopAllProducts = ({ productsData }) => {
    const [data,setData] = useState([...productsData])
    const domainUrl = "https://lampinboxportal.azurewebsites.net";
    const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-all-products";
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
    </CategorySectionCreator>
  );
};

export default GiftShopAllProducts;
