import axios from "axios";

const getGiftShopNavigation = async () => {
  const response = await axios.get("/api/gift-shop-navigation");
  return response.data;
};

const getPopularProducts = async () => {
  const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-recents-products-list";
  const response = await axios.post(url,{
    "requestParameters":{
      "PageNo": 1,
      "PageSize": 100,
      "recordValueJson": "[]"
    }
  })
  return response.data;
};

const getTopSailedProducts = async () => {
  const response = await axios.get("/api/gift-shop/top-sailed-products");
  return response.data;
};

const getGiftShopProducts = async () => {
  const response = await axios.get("/api/gift-shop/all-products");
  return response.data;
};

const getGiftShopServiceList = async () => {
  const response = await axios.get("/api/gift-shop/service-list");
  return response.data;
};

const getGiftShopTopCategories = async () => {
  const url = "https://lampinboxportal.azurewebsites.net/api/v1/dynamic/dataoperation/get-popular-categories";
  const response = await  axios.post(url,{
    "requestParameters":{
      "recordValueJson": "[]"
    }
  });
  return response.data;
}; // eslint-disable-next-line import/no-anonymous-default-export

export default {
  getPopularProducts,
  getGiftShopProducts,
  getTopSailedProducts,
  getGiftShopNavigation,
  getGiftShopServiceList,
  getGiftShopTopCategories,
};
