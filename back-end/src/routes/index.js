const { Router } = require('express');
const routerUser = require("./user/user");
const routerProduct = require("./product/product");
const routerCategory = require("./category/category");
const routerReviw = require("./review/review");
const routerFavorite = require("./favorite/favorite");
const routerSize = require("./size/size");
const routerTag = require("./tag/tag");
const router = Router();

router.use("/user", routerUser);
router.use("/product", routerProduct);
router.use("/category", routerCategory);
router.use("/review", routerReviw);
router.use("/favorite", routerFavorite);
router.use("/size", routerSize);
router.use("/tag", routerTag);


module.exports = router;