const { Router } = require('express');
const { Op } = require("sequelize")
const { Category, Product, Tag, Image, Size } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
    const {
        name,
        brand,
        description,
        image,
        price,
        condition,
        categories,
        stock,
        tags,
        photos,
        sizes
    } = req.body;

    try {
        const newProduct = await Product.create({
            name,
            brand,
            description,
            image,
            price,
            condition,
            stock,
        });

        // Crear imágenes
        if (photos) {
            await Promise.all(photos.map(async (photo) => {
                try {
                    await newProduct.createImage({ image: photo });
                } catch (error) {
                    throw new Error("No se pudo crear una imagen");
                }
            }));
        }

        // Crear etiquetas
        const tag = await Tag.findAll({ where: { tag: tags } });
        if (tag.length > 0) {
            await newProduct.addTags(tag);
        } else {
            await Promise.all(tags.map(async (tag) => {
                try {
                    await newProduct.createTag({ tag });
                } catch (error) {
                    throw new Error("No se pudo crear una etiqueta");
                }
            }));
        }

        // Crear tallas
        const size = await Size.findAll({ where: { size: sizes } });
        if (size.length > 0) {
            await newProduct.addSizes(size);
        } else {
            await Promise.all(sizes.map(async (size) => {
                try {
                    await newProduct.createSize({ size });
                } catch (error) {
                    throw new Error("No se pudo crear una talla");
                }
            }));
        }

        // Asociar categorías
        const category = await Category.findAll({ where: { category: categories } });
        await newProduct.addCategories(category);

        res.send(newProduct);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: err.message });
    }
});


router.get("/", async (req, res) => {
    const {
        search = "",
        amount = 20,
        page = 0,
        stock = 0,
        category = "",
        brand = "",
        minPrice = 0,
        maxPrice = 2147483647,
        tag = "",
        size = "",
    } = req.query;

    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    through: { attributes: [] },
                },
                {
                    model: Tag,
                    through: { attributes: [] },
                },
                {
                    model: Size,
                    through: { attributes: [] },
                },
                {
                    model: Image,
                },
            ],
            offset: page * amount,
            limit: amount,
            where: {
                stock: { [Op.gte]: stock },
                hidden: false,
                brand: { [Op.iLike]: `%${brand}%` },
                name: { [Op.iLike]: `%${search}%` },
                price: { [Op.between]: [minPrice, maxPrice] },
            },
        });

        // Filtrar productos adicionales según los filtros de asociación
        const filteredProducts = products.filter((product) => {
            const categoryMatches = category
                ? product.categories.some((categoryObj) => {
                    const categoryString = categoryObj.category
                    return typeof categoryString === "string" && categoryString.toLowerCase().includes(category.toLowerCase());
                })
                : true;

            const tagMatches = tag
                ? product.tags.some((tagObj) => {
                    const tagSting = tagObj.tag
                    return typeof tagSting === "string" && tagSting.toLowerCase().includes(tag.toLowerCase())
                })
                : true;

            const sizeMatches = size
                ? product.sizes.some((sizeObj) => {
                    const sizeString = sizeObj.size;
                    return typeof sizeString === 'string' && sizeString.toLowerCase().includes(size.toLowerCase());
                })
                : true;

            return categoryMatches && tagMatches && sizeMatches;
        });

        res.send(filteredProducts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error interno del servidor");
    }
});






router.put("/status/false", async (req, res) => {
    // console.log(req.body)
    const { id } = req.body;
    try {
        const product = await Product.findByPk(id);
        product.update({ status: false });
        await product.save();
        res.send("Product false");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


router.put("/visits", async (req, res) => {
    // console.log(req.body)
    const { id, visit } = req.body;
    try {
        const product = await Product.update({ visits: visit }, { where: { id } });
        res.send(product);
    } catch (err) {
        console.log(err.message);
    }
});

router.put("/status/true", async (req, res) => {
    // console.log(req.body)
    const { id } = req.body;
    try {
        const product = await Product.findByPk(id);
        product.update({ status: true });
        await product.save();
        res.send("Product true");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.get("/max", async (req, res) => {
    try {
        const { visit } = req.query;
        const maxVisits = await Product.findAll({

            where: {
                visits: visit
            }


        })
        res.status(200).send(maxVisits)
    } catch (error) {
        console.log(error.message)
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id, {
            include: [
                {
                    model: Category,
                    through: { attributes: [] },
                },
                {
                    model: Tag,
                    through: { attributes: [] },
                },
                {
                    model: Size,
                    through: { attributes: [] },
                },
                {
                    model: Image,
                },
            ],
        });
        res.send(product);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


module.exports = router;