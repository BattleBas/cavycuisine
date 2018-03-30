'use strict';

const functions = require('firebase-functions');
const { DialogflowApp, Responses } = require('actions-on-google');
const Food = require('./food')
const Fact = require('./fact')
const SSML = require('./ssml')


// Actions received from Dialogflow from a triggered intent
const Actions = {
  WELCOME: 'input.welcome',
  SAFE_TO_EAT_ACTION: 'safe_to_eat',
  FUN_FACT: "fun_fact"
}

// Arguments
const Arguments = {
  ANIMAL: 'animal',
  VEGETABLE: 'vegetable',
  FRUIT: 'fruit',
  BASIC_FOOD: 'basic_food',
  RANDOM_ARGUMENT: 'random'
}

const BasicResponses = {
  GREET_USER: SSML`
  <speak>
  Welcome to Cavy Cuisine! how can I help you?
  </speak>`,
  FOOD_ERROR: SSML`
  <speak>
  Error
  </speak>`
}

class CavyCuisine {

   /**
  * Create a new instance of the app handler
  * @param {AoG.ExpressRequest} req
  * @param {AoG.ExpressResponse} res
  */
  constructor (req, res) {
    this.app = new DialogflowApp({
      request: req,
      response: res
    });
  }

  /**
  * Get the Dialogflow intent and handle it using the appropriate method
  */
  run () {
    const map = this;
    const action = this.app.getIntent();

    if (!action) {
      this.app.tell(BasicResponses.FOOD_ERROR);
    }

    map[action]();
  }

  /**
  * Constructs a simple response to greet the user
  */
  [Actions.WELCOME] () {
    return this.app.ask(BasicResponses.GREET_USER);
  }

  /**
  * Constructs a simple response that answers the question
  * if the food is safe to eat for a Guinea Pig.
  */
  [Actions.SAFE_TO_EAT_ACTION] () {
    // Get all possible arguments
    let vegetable = this.app.getArgument(Arguments.VEGETABLE);
    let fruit = this.app.getArgument(Arguments.FRUIT);
    let basic_food = this.app.getArgument(Arguments.BASIC_FOOD);
    let random = this.app.getArgument(Arguments.RANDOM);

    // Check which one is provided
    if (vegetable) {
      this.food = vegetable;
    }
    if (fruit) {
      this.food = fruit;
    }
    if (basic_food) {
      this.food = basic_food;
    }
    if (random) {
      this.food = random;
    }

    if (!this.food) {
      this.app.ask("What is the fruit or vegetable?");
    }

    // Get the response for the food
    let food = new Food();
    let response = food.isSafe(this.food);
    return this.app.tell(response);
  }

  /**
  * Constructs a simple response using a random fact.
  */
  [Actions.FUN_FACT] () {
    let fact = new Fact();
    let response = fact.getRandom();
    return this.app.tell(response);
  }

}

exports.cavyCuisine = functions.https.onRequest((req, res) => new CavyCuisine(req, res).run());
