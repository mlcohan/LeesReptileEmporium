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

router.get('/lizards', async (req, res) => {
  try {
    const lizardData = await Animal.findAll({
      where: { category: 'lizard' },
    });
    const lizards = lizardData.map((lizard) => lizard.get({ plain: true }));
    res.render('lizard', { lizards });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/snakes', async (req, res) => {
  try {
    const snakeData = await Animal.findAll({
      where: { category: 'snake' },
    });
    const snakes = snakeData.map((snake) => snake.get({ plain: true }));
    res.render('snake', { snakes });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/turtles', async (req, res) => {
  try {
    const turtleData = await Animal.findAll({
      where: { category: 'turtle' },
    });
    const turtles = turtleData.map((turtle) => turtle.get({ plain: true }));
    res.render('turtle', { turtles });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/exotic', async (req, res) => {
  try {
    const exoticData = await Animal.findAll({
      where: { category: 'exotic' },
    });
    const exotics = exoticData.map((exotic) => exotic.get({ plain: true }));
    res.render('exotic', { exotics });
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/about', async (req, res) => {
  res.render('About');
});

router.get('/all', async (req, res) => {
  res.render('all')
});

// router.get('/cart', async (req, res) => {
//   try {
//     const cartData = await Cart.findByPk(req.params.id, {
//       include: [
//         {
//           model: Cart,
//         },
//       ],
//     });

//     const carts = cartData.get({ plain: true });

//     res.render('cart', {
//       ...carts,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err)
//   }
// });

router.get('/login', async (req, res) => {
  res.render('login')
});

router.get('/fan-chat', async (req, res) => {
  res.render('signup');
});
// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
