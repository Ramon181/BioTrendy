const { Router } = require("express");
const { Product, Favorite } = require("../../db");
const router = Router();
module.exports = router;

router.get("/", async (req, res) => {
    const { userName } = req.query;
    if (!userName) return res.send("Missing Username");
    try {
        const favorites = await Favorite.findAll({
            where: { userName },
            include: Product,
        });
        res.send(favorites);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.post("/add", async (req, res) => {
    const { userName, productId } = req.body;
    try {
        const favorite = await Favorite.create({ userName, productId });
        res.send(favorite);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.delete("/delete", async (req, res) => {
    const { userName, productId } = req.body;
    // console.log(req.body)
    try {
        // console.log(1, userName, productId, "Route Favorite/delete")
        const favorite = await Favorite.findOne({ where: { userName, productId } });
        // console.log(2, favorite, "Route Favorite/delete")
        favorite.destroy();
        res.send("Eliminated");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});