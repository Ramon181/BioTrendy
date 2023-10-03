const { Router } = require('express');
const { Size } = require("../../db")

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { size } = req.body
    if (size) {
      await Size.create({ size });
      res.send("Size created");
    } else {
      res.send("Size No create");
    }
  } catch (error) {
    console.log(error.message)
  }
})

router.get("/", async (req, res) => {
  try {
    res.send(await Size.findAll());
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;