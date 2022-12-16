import { Box, Container, styled } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import MobileNavigationBar2 from "components/mobile-navigation/MobileNavigationBar2";
import SideNavbar from "components/page-sidenav/SideNavbar";
import SEO from "components/SEO";
import Setting from "components/Setting";
import GiftShopAllProducts from "pages-sections/giftshop/GiftShopAllProducts";
import GiftShopPopularItems from "pages-sections/giftshop/GiftShopPopularItems";
import GiftShopSection1 from "pages-sections/giftshop/GiftShopSection1";
import GiftShopSection3 from "pages-sections/giftshop/GiftShopSection3";
import GiftShopServices from "pages-sections/giftshop/GiftShopServices";
import GiftShopTopSales from "pages-sections/giftshop/GiftShopTopSales";
import TopCategorySection from "pages-sections/giftshop/TopCategorySection";
import { useEffect, useRef, useState } from "react";

import { useAuth0 } from '@auth0/auth0-react';
import useSWR from 'swr';

import axios from "axios";
import api from "utils/api/gift-shop";
import { layoutConstant } from "utils/constants";

const StyledContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    ".sidenav": {
        top: 0,
        bottom: 0,
        position: "relative",
        transition: "all 350ms ease-in-out",
        width: layoutConstant.grocerySidenavWidth,
        minWidth: layoutConstant.grocerySidenavWidth,
        "& .MuiPaper-root": {
            borderRadius: 0,
        },
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    ".pageContent": {
        left: "unset",
        position: "relative",
        width: `100%`,
        [theme.breakpoints.down("md")]: {
            width: "100%",
            "& .MuiGrid-item": {
                paddingLeft: 0,
            },
            "& .categories": {
                marginLeft: "-1.75rem",
            },
        },
    },
})); // ========================================================

// ========================================================


const GiftShop = (props) => {
    const url = "https://lampinbox.azurewebsites.net/tokenweb/guest";
    const pageContentRef = useRef();
    const [sidebarHeight, setSidebarHeight] = useState(0);


    useEffect(() => {
        // setSidebarHeight(pageContentRef.current.offsetHeight)
        // axios.post(url)
        //     .then(res=>{
        //         console.log('data',res.data.AccessToken)
        //             if (res.status == 200) {
        //                 sessionStorage.setItem("token", res.data.AccessToken)
        //             } else {
        //                 throw Error(res.statusText)
        //             } })
        //     .catch(err=> console.log(err));


    }, []);
    return (
        <ShopLayout1 showTopbar={false}>
            <SEO title="Lamp In Box" />
            <GiftShopSection1 />

            <StyledContainer>
                <Box className="pageContent" ref={pageContentRef}>
                    <GiftShopServices serviceData={props.giftShopServicesList} />
                    {/*<GiftShopSection3 />*/}
                </Box>
            </StyledContainer>
            <TopCategorySection categoryList={props.giftShopTopCategories} />
            <GiftShopPopularItems productsData={props.popularProducts} />
            {/*<GiftShopTopSales productsData={props.topSailedProducts} />*/}
            <GiftShopAllProducts productsData={props.giftShopProducts} />

            <MobileNavigationBar2>
                <SideNavbar
                    navList={props.giftShopNavList}
                    lineStyle="dash"
                    sidebarStyle="style2"
                />
            </MobileNavigationBar2>
        </ShopLayout1>
    );
};

export async function getStaticProps() {
    const popularProducts = await api.getPopularProducts();
    const giftShopProducts = await api.getGiftShopProducts();
    const giftShopNavList = await api.getGiftShopNavigation();
    const topSailedProducts = await api.getTopSailedProducts();
    const giftShopServicesList = await api.getGiftShopServiceList();
    const giftShopTopCategories = await api.getGiftShopTopCategories();
    return {
        props: {
            giftShopNavList,
            popularProducts,
            giftShopProducts,
            topSailedProducts,
            giftShopServicesList,
            giftShopTopCategories,
        },
    };
};



export default GiftShop;
