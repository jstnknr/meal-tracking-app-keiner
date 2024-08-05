const mongoose = require('mongoose');
const User = require('../models/User');
const Meal = require('../models/Meal');
const { MONGODB_URI } = require('../config/connection');


const seedData = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    await User.deleteMany({});
    await Meal.deleteMany({});

    const user = new User({ username: 'testuser', password: 'password' });
    await user.save();


    const meal1 = new Meal({ name: 'Breakfast', calories: 400, user: user._id });
    const meal2 = new Meal({ name: 'Lunch', calories: 600, user: user._id });

    await meal1.save();
    await meal2.save();


    user.meals.push(meal1, meal2);
    await user.save();

    console.log('Database seeded successfully');
    mongoose.connection.close();  
  } catch (error) {
    console.error('Error seeding the database:', error);
    mongoose.connection.close();  
  }
};

seedData();
