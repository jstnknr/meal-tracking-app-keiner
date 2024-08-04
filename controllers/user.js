const axios = require('axios');
const User = require('../models/User');
const Meal = require('../models/Meal');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).populate('meals');
    res.render('protected', { user, meals: user.meals });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addMeal = async (req, res) => {
  const { name, calories } = req.body;
  try {
    const newMeal = new Meal({ name, calories, user: req.session.userId });
    await newMeal.save();
    const user = await User.findById(req.session.userId);
    user.meals.push(newMeal);
    await user.save();
    res.redirect('/protected');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchFood = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&api_key=TCsRA3jEWzoJIo09Vq3KtbqdrO1UffemR5zBkLM3`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
