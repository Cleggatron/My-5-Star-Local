const router = require("express").Router();
const { Restaurant, Review } = require("../../models");

// /api/restaurant/

// TODO: test all routes
router.post("/", async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRestaurant);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const newReview = await Review.create({
        text: req.body.content,
      user_id: req.session.user_id,
      restaurant_id: req.params.id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const restaurantData = await Restaurant.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!restaurantData) {
      res.status(404).json({ message: "No Post found with this id!" });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  console.log(req.body);
  try {
    const updatedRestaurant = await Restautant.update(
      {
        ...req.body,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedRestaurant);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
