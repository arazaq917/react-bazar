import {Box, Grid, useTheme} from "@mui/material";
import Carousel from "components/carousel/Carousel";
import ProductCard15 from "components/product-cards/ProductCard15";
import { H1 } from "components/Typography";
import useWindowSize from "hooks/useWindowSize";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CategorySectionCreator from "../../components/CategorySectionCreator"; // ===============================================

// ===============================================
const TopCategorySection = ({ categoryList }) => {

  const theme = useTheme();
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);
  const domainUrl = "https://lampinboxportal.azurewebsites.net"
  const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-popular-categories";
  const [data,setData] = useState([...categoryList])
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);


  }, [width]);
  return (
      <CategorySectionCreator title="Top Categories" seeMoreLink="#">
        <Grid container mb={-0.5} spacing={3}>
      {/*<Carousel*/}
      {/*  totalSlides={data.length}*/}
      {/*  visibleSlides={visibleSlides}*/}
      {/*  infinite={true}*/}
      {/*  sx={{*/}
      {/*    "& #backArrowButton, #backForwardButton": {*/}
      {/*      width: 35,*/}
      {/*      height: 35,*/}
      {/*      borderRadius: 0,*/}
      {/*      boxShadow: theme.shadows[2],*/}
      {/*      color: theme.palette.primary.main,*/}
      {/*      background: theme.palette.primary[50],*/}
      {/*      "&:hover": {*/}
      {/*        background: theme.palette.primary[100],*/}
      {/*      },*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
        {data.map((item, ind) => (
            <Grid key={ind} item md={3} sm={6} xs={12}>
          <Link href="#" key={ind}>
            <a>
              <ProductCard15
                title={item.Name}
                available={item.TotalProducts}
                imgUrl={`${domainUrl}${item.AttachmentURL}`}
              />
            </a>
          </Link>
            </Grid>
        ))}
      {/*</Carousel>*/}
        </Grid>
      </CategorySectionCreator>
  );
};

export default TopCategorySection;
