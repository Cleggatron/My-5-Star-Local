const router = require('express').Router();
const { User, Restaurant, Review } = require("../models");
const { Op } = require("sequelize");
const withAuth = require("../util/auth");

// "/" route handlers


// get all by name search 
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
    res.render('homepage', { restaurants,
        logged_in: req.session.logged_in });
});


// find all
router.get('/', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
    });

    // TODO: add 'if' statements to choose what to sort by 
    const restaurants = restaurantData.map((eachRest) => 
    eachRest.get({ plain: true })
    );
    res.render('homepage', { restaurants,
        logged_in: req.session.logged_in });
});

// find by address
router.get('/', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
      order: [['rating', 'DESC']],
      where: {
        location: {
           [Op.substring]: req.body.location, 
        },
    },
    });

    // TODO: add 'if' statements to choose what to sort by 
    const restaurants = restaurantData.map((eachRest) => 
    eachRest.get({ plain: true })
    );
    res.render('homepage', { restaurants,
        logged_in: req.session.logged_in });
});


//get by ID
router.get('/restaurant/:id', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
      order: [[Review,'date_created', 'DESC']],
      where: {
          id: req.params.id,
      },
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

    const restaurants = restaurantData.map((eachRest) => 
    eachRest.get({ plain: true })
    );

    console.log(JSON.stringify(restaurants));
    res.render('restaurantPage', { restaurants , 
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