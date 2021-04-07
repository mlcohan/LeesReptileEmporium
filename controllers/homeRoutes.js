const router = require("express").Router();
const { Animal, Cart, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

router.get("/frogs", async (req, res) => {
  try {
    const frogData = await Animal.findAll({
      where: { category: "frog" },
    });
    const frogs = frogData.map((frog) => frog.get({ plain: true }));
    res.render("frogs", { frogs });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/lizards", async (req, res) => {
  try {
    const lizardData = await Animal.findAll({
      where: { category: "lizard" },
    });
    const lizards = lizardData.map((lizard) => lizard.get({ plain: true }));
    res.render("lizard", { lizards });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/snakes", async (req, res) => {
  try {
    const snakeData = await Animal.findAll({
      where: { category: "snake" },
    });
    const snakes = snakeData.map((snake) => snake.get({ plain: true }));
    res.render("snake", { snakes });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/turtles", async (req, res) => {
  try {
    const turtleData = await Animal.findAll({
      where: { category: "turtle" },
    });
    const turtles = turtleData.map((turtle) => turtle.get({ plain: true }));
    res.render("turtle", { turtles });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/exotic", async (req, res) => {
  try {
    const exoticData = await Animal.findAll({
      where: { category: "exotic" },
    });
    const exotics = exoticData.map((exotic) => exotic.get({ plain: true }));
    res.render("exotic", { exotics });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/about", async (req, res) => {
  res.render("About");
});

router.get("/all", async (req, res) => {
  try {
    res.render("all");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get('/cart', withAuth, async (req, res) => {
  const user = await User.findByPk(
    req.session.user_id,
    {
      include: [
        'shopping_cart',
      ]
    }
  );
  console.log(user.toJSON());
  res.render('cart', {
    user: user.get({ plain: true })
  })
});

module.exports = router;
