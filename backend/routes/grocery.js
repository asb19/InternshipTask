const router = require("express").Router();
let grocery = require("../models/grocery");
router.route("/").get((req, res) => {
  grocery
    .find()
    .then((groceries) => res.json(groceries))
    .catch((err) => res.status(400).json("Error" + err));
});
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const quantity = req.body.quantity;
  const newGrocery = new grocery({
    name,
    quantity,
  });
  newGrocery
    .save()
    .then(() => {
      res.json(`${name} added`);
    })
    .catch((err) => res.status(400).json("error" + err));
});
router.route("/:id").get((req, res) => {
  grocery
    .findById(req.params.id)
    .then((grocery) => res.json(grocery))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  grocery
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Grocery deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  grocery
    .findById(req.params.id)
    .then((grocery) => {
      grocery.name = req.body.name;
      grocery.quantity = req.body.quantity;

      grocery
        .save()
        .then(() => res.json("grocery updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
