import { useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard16 from "components/product-cards/ProductCard16";
import useWindowSize from "hooks/useWindowSize";
import React, { useEffect, useState } from "react";
import axios from "axios"; // =========================================================

// =========================================================
const GiftShopPopularItems = ({ productsData }) => {
  const width = useWindowSize();
  const { palette, shadows } = useTheme();
  const [visibleSlides, setVisibleSlides] = useState(4);
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(4);
    else setVisibleSlides(4);
  }, [width]);
    const [data,setData] = useState([])
    const domainUrl = "https://lampinboxportal.azurewebsites.net";
    const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-recents-products-list";
    useEffect(()=>{
        axios.post(url,{
            "requestParameters":{
                "PageNo": 1,
                "PageSize": 100,
                "recordValueJson": "[]"
            }
        }).then(res=>{
            console.log('response',JSON.parse(res.data.data))
            setData(JSON.parse(res.data.data));
        }).catch(e=>{
            console.log('error',e)
        })

    },[])
  return (
    <CategorySectionCreator title="Recent Items" seeMoreLink="#">
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={productsData.length}
        sx={{
          "& .carousel__slider": {
            paddingBottom: "15px",
          },
          "& #backArrowButton, #backForwardButton": {
            width: 35,
            height: 35,
            borderRadius: 0,
            boxShadow: shadows[2],
            color: palette.primary.main,
            background: palette.primary[50],
            "&:hover": {
              background: palette.primary[100],
            },
          },
        }}
      >
        {data.map((item, ind) => (
          <ProductCard16
            key={ind}
            id={item.ProductId}
            title={item.ProductName}
            price={item.Price}
            off={item.IsDiscountAllowed?10:0}
            rating={item.Rating}
            imgUrl={`${domainUrl}${item.ProductImagesJson[0].AttachmentURL}`}
          />
        ))}
      </Carousel>
    </CategorySectionCreator>
  );
};

export default GiftShopPopularItems;
