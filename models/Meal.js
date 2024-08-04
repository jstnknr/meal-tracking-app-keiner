const { Schema, model } = require("mongoose");

const MealSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  calories: Number,
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('Meal', MealSchema);
