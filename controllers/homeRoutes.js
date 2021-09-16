const router = require('express').Router();
const { User, Restaurant, Review } = require("../models");
const { Op } = require("sequelize");
// const withAuth = require("../util/auth");

// "/" route handlers


// get all 
router.get('/nameSearch', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
      order: [['rating', 'DESC']],
      where: {
          name: {
             [Op.substring]: req.body.name, 
          },
      },
    });

    // TODO: add 'if' statements to choose what to sort by ?
    const restaurants = restaurantData.map((eachRest) => 
    eachRest.get({ plain: true })
    );
    res.render('home', { restaurants,
        logged_in: req.session.logged_in });
});


// find by address
router.get('/', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
      order: [['rating', 'DESC']],
    });

    // TODO: add 'if' statements to choose what to sort by 
    const restaurants = restaurantData.map((eachRest) => 
    eachRest.get({ plain: true })
    );
    res.render('home', { restaurants,
        logged_in: req.session.logged_in });
});




//get by ID
router.get('/restaurant/:id', withAuth, async function (req, res) {
    const restaurantData = await Posts.findByPk( req.params.id, {
      order: [[Review,'date_created', 'DESC']],
        include: [
            {
                model: Review,
                order: [['date_created', 'DESC']],
                include: [User],
                attributes: {
                    exclude: ['password'],
                }
            }
          ],
    });

    // maybe add sort by review?

    const restaurants = restaurantData.get({ plain: true });

    console.log(JSON.stringify(restaurants));
    res.render('restaurantpageview', { restaurants , 
        logged_in: req.session.logged_in, });


});


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('login');
  });

module.exports = router;