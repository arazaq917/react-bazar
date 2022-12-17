import { Box, Button, Grid, styled, useTheme } from "@mui/material";
import Carousel from "components/carousel/Carousel";
import LazyImage from "components/LazyImage";
import { H1, Paragraph } from "components/Typography";
import React, {useEffect, useState} from "react";
import axios from "axios"; // styled components

const StyledBox = styled(Box)(({ theme }) => ({
  marginBottom: 60,
  overflow: "hidden",
  backgroundColor: '#F6F2ED',
  "& .carousel-dot": {
    left: 0,
    right: 0,
    bottom: "30px",
    margin: "auto",
    position: "absolute",
  },
}));
const StyledGrid = styled(Grid)(({ theme }) => ({
  maxWidth: 1280,
  margin: "auto",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));
const GridItemOne = styled(Grid)(({ theme }) => ({
  padding: 20,
  "& .titleBox": {
    marginTop: 10,
    marginBottom: 30,
    "& h1": {
      fontSize: 45,
      lineHeight: 1.3,
    },
  },
  [theme.breakpoints.down("md")]: {
    "& .titleBox": {
      "& h1": {
        fontSize: 30,
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    "& .titleBox": {
      textAlign: "center",
      "& h1": {
        fontSize: 25,
      },
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  fontWeight: 400,
  borderRadius: 0,
  fontSize: "16px",
  background: theme.palette.primary.main,
  "&:hover": {
    background: theme.palette.primary[400],
  },
}));
const GridItemTwo = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const domainUrl = "https://lampinboxportal.azurewebsites.net";
const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-home-screen-banner";

const GiftShopSection1 = ({topBanner}) => {
  const { palette } = useTheme();
  const [banner,setBanner] = useState([...topBanner])
  return (
    <StyledBox id="carouselBox">
      <Carousel
        spacing="0px"
        totalSlides={banner.length}
        showDots={true}
        autoPlay={false}
        visibleSlides={1}
        showArrow={false}
        dotClass="carousel-dot"
        dotColor={palette.primary.main}
      >
        {banner.map((item, ind) => (
          <StyledGrid container key={ind}>
            <GridItemOne item md={6} sm={6} xs={12}>
              <Box py={6}>
                <Paragraph color="primary.main">{item.MainTitle}</Paragraph>
                <Box className="titleBox">
                  <H1>{item.TopTitle}</H1>
                </Box>

                <StyledButton
                  variant="contained"
                  sx={{
                    px: "30px",
                    py: "8px",
                  }}
                >
                  Shop Now
                </StyledButton>
              </Box>
            </GridItemOne>

            <GridItemTwo item md={6} sm={6} xs={12}>
              <LazyImage
                priority
                width={600}
                height={450}
                layout="responsive"
                objectFit="contain"
                src={`${domainUrl}${item.BannerImgUrl}`}
              />
            </GridItemTwo>
          </StyledGrid>
        ))}
      </Carousel>
    </StyledBox>
  );
};


export default GiftShopSection1;
