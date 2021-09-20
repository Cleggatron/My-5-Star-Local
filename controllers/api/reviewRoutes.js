const router = require("express").Router();
const {Review} = require("../../models");

router.post("/", async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newReview);

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
} )

module.exports = router;