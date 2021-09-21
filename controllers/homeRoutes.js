const router = require('express').Router();
const { User, Restaurant, Review } = require("../models");
const { Op, Sequelize } = require("sequelize");
const withAuth = require("../util/auth");

// "/" route handlers


// get all by name search 
router.get('/name/:name', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
      include: {
        model: Review,
      },
      attributes : ['id', 'name', 'bio', 'location', 'website', [Sequelize.fn('AVG', Sequelize.col('rating')), 'restaurantRating']],
      group: ['id'],
      order:  [[Sequelize.fn('AVG', Sequelize.col('rating')), 'DESC']],
      where: {
          name: {
             [Op.substring]: req.params.name, 
          },
      },
    });

    const restaurants = restaurantData.map((eachRest) => 
    eachRest.get({ plain: true }) 
    );

    res.render('homepage', { restaurants,
        logged_in: req.session.logged_in });
});


// find all
router.get('/', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
      include: {
        model: Review
      },
      attributes : ['id', 'name', 'bio', 'location', 'website', [Sequelize.fn('AVG', Sequelize.col('rating')), 'restaurantRating']],
      group: ['id'],
      order:  [[Sequelize.fn('AVG', Sequelize.col('rating')), 'DESC']],

    });

    const restaurants = restaurantData.map((eachRest) => 
    eachRest.get({ plain: true })
    );

    console.log(restaurants);

    res.render('homepage', { restaurants,
        logged_in: req.session.logged_in });
});

// find by address use req.params
router.get('/location/:location', withAuth, async function (req, res) {
    const restaurantData = await Restaurant.findAll({
      include: {
        model: Review
      },
      attributes : ['id', 'name', 'bio', 'location', 'website', [Sequelize.fn('AVG', Sequelize.col('rating')), 'restaurantRating']],
      group: ['id'],
      order:  [[Sequelize.fn('AVG', Sequelize.col('rating')), 'DESC']],
      where: {
        location: {
           [Op.substring]: req.params.location, 
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
  const restaurantData = await Restaurant.findByPk(req.params.id, {
    attributes : ['id', 'name', 'bio', 'location', 'website', [Sequelize.fn('AVG', Sequelize.col('rating')), 'restaurantRating']],
    group: ['id'],
    order:  [[Sequelize.fn('AVG', Sequelize.col('rating')), 'DESC']],
      include: {
        model: Review, 
        attributes: ["text", "rating"],
        include: {
          model: User,
          attributes: ["name"]
        }
      }
    });


    const restaurant = restaurantData.get({ plain: true });
    res.render('restaurantPage', { restaurant , 
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