const FoodResponses = require('./responses/food_responses.js');

module.exports = class Food {
  isSafe (food) {
    // Check the list of food responses if the food exists
    // If the food is found return the predetermined response
    if(food in FoodResponses.daily_eat){
      return FoodResponses.daily_eat[food];
    }
    else if (food in FoodResponses.frequent_eat){
      return FoodResponses.frequent_eat[food];
    }
    else if (food in FoodResponses.occasionally_eat){
      return FoodResponses.occasionally_eat[food];
    }
    else if (food in FoodResponses.rarely_eat) {
      return FoodResponses.rarely_eat[food];
    }
    else if (food in FoodResponses.never_eat) {
      return FoodResponses.never_eat[food];
    }
    else{
      return FoodResponses.default_response;
    }

  }
}
