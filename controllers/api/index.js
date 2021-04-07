const router = require("express").Router();
const userRoutes = require("./userRoutes");
const cartRoutes = require("./CartRoutes");

router.use("/users", userRoutes);
router.use('/cart', cartRoutes);

module.exports = router;
