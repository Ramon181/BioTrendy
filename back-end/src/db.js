require("dotenv").config()
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/ecomerce`, {
    logging: false,
    native: false,
})

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Category, Review, User, Tag, Favorite, Image, Size } = sequelize.models;

Product.belongsToMany(Category, {
    through: "ProductCategory",
    timestamps: false,
});
Category.belongsToMany(Product, {
    through: "ProductCategory",
    timestamps: false,
});

Product.belongsToMany(Tag, {
    through: "ProductTags",
    timestamps: false,
});
Tag.belongsToMany(Product, {
    through: "ProductTags",
    timestamps: false,
});

Product.belongsToMany(Size, {
    through: "ProductSize",
    timestamps: false,
});
Size.belongsToMany(Product, {
    through: "ProductSize",
    timestamps: false,
});

Product.hasMany(Image)
Image.belongsTo(Product)

User.belongsToMany(Product, {
    through: Review,
    foreignKey: "userName",
    otherKey: "productId",
});
Product.belongsToMany(User, {
    through: Review,
    foreignKey: "productId",
    otherKey: "userName",
});
Product.hasMany(Review);
Review.belongsTo(Product);


Product.belongsToMany(User, {
    through: Favorite,
    foreignKey: "productId",
    otherKey: "userName",
});
User.belongsToMany(Product, {
    through: Favorite,
    foreignKey: "userName",
    otherKey: "productId",
});
Product.hasMany(Favorite);
Favorite.belongsTo(Product);

module.exports = {
    ...sequelize.models,
    conn: sequelize
}