import Mock from "./mock";
import "./server/dashboard";
import "./server/gift-shop/navigationDB";
import "./server/gift-shop/productsDB";
import "./server/gift-shop/servicesAndCategoriesDB";
import "./server/related-products/productsDB";
Mock.onAny().passThrough();
