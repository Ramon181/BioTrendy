const { Router } = require('express');
const { Tag } = require("../../db")

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { tag } = req.body
    if (tag) {
      await Tag.create({ tag });
      res.send("Tag created");
    } else {
      res.send("Tag No create");
    }
  } catch (error) {
    console.log(error.message)
  }
})

router.get("/", async (req, res) => {
  try {
    res.send(await Tag.findAll());
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;