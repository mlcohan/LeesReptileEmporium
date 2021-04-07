const router = require('express').Router();
const { Cart } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body);
    const existingAnimal = await Cart.findOne({
      where: {
        user_id: req.session.user_id,
        animal_id: req.body.animal_id
      }
    });
    if (!existingAnimal){
      const newAnimal = await Cart.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newAnimal);
    } else {
      existingAnimal.update({
        quantity: existingAnimal.quantity + 1
      });
      res.status(200).json(existingAnimal);
    }

    
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
