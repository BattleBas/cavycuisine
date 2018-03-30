const deepFreeze = require('deep-freeze');
const SSML = require('../ssml')

const daily_eat_default =
  SSML`
  <speak>
  Yes, they can eat it daily.
  </speak>`

// Food can be eaten every day
const daily_eat = {
  "lettuce" : SSML`
  <speak>
  Yes, they can eat all types of lettuce daily.
  Except iceberg lettuce is discouraged due to its high water content.
  </speak>`,
  "radicchio" : daily_eat_default,
  "zucchini" : daily_eat_default,
  "hay" : SSML`
  <speak>
  Yes, they should have access to hay at all times.
  </speak>`,
  "water" : SSML`
  <speak>
  Yes, they should have access to water at all times.
  </speak>`
}

const frequent_eat_default = SSML`
<speak>
Yes, but they can only eat it two to four times a week.
</speak>`

const frequent_eat_bloating_default = SSML`
<speak>
Yes, but they can only eat it two to four times a week.
Eating too much may cause gas or bloating.
</speak>`

// Food can only be eaten one to two times a week
const frequent_eat = {
  "arugula" : frequent_eat_default,
  "pepper" : frequent_eat_bloating_default,
  "blueberries" : frequent_eat_default,
  "cabbage" : frequent_eat_bloating_default,
  "carrots" : SSML`
  <speak>
  Yes, but they can only eat carrots two to four times a week.
  Carrots are high in Vitamin A.
  </speak>`,
  "celery" : SSML`
  <speak>
  Yes, but they can only eat celery two to four times a week.
  Celery can be a choking hazard.
  Remove the celery “veins” to prevent hazard.
  </speak>`,
  "cherries" : SSML`
  <speak>
  Yes, but they can only eat cherries two to four times a week.
  Remove the pits before feeding the cherries to them.
  </speak>`,
  "chicory" : frequent_eat_default,
  "collards" : frequent_eat_bloating_default,
  "cranberries" : frequent_eat_default,
  "watercress" : frequent_eat_default,
  "cucumber" : frequent_eat_default,
  "endive" : frequent_eat_default,
  "grapes" : frequent_eat_default,
  "beans" : frequent_eat_default,
  "kohlrabi" : frequent_eat_default,
  "parsnip" : frequent_eat_default,
  "peas" : frequent_eat_default,
  "raspberries" : frequent_eat_default,
  "squash" : frequent_eat_default
}

const occasionally_eat_default = SSML`
<speak>
Yes, but they can eat it only one to two times a week.
</speak>`

const occasionally_eat_bloating_default = SSML`
<speak>
Yes, but they can eat it only one to two times a week.
Eating too much may cause gas or bloating.
</speak>`

// Food can only be eaten one to two times a week
const occasionally_eat = {
  "apple" : SSML`
  <speak>
  Yes, but the apple seeds are poisonous so don't feed them the core.
  They can eat apple slices one to two times a week.
  </speak>`,
  "apricot" : occasionally_eat_default,
  "asparagus" : SSML`
  <speak>
  Yes, but they can only eat asparagus one to two times a week.
  Eating too much asparagus may cause gas or bloating.
  </speak>`,
  "basil" : SSML`
  <speak>
  Yes, but they can only eat basil one to two times a week.
  Eating too much basil may cause constipation.
  </speak>`,
  "beets" : occasionally_eat_default,
  "blackberries" : occasionally_eat_default,
  "broccoli" : occasionally_eat_bloating_default,
  "Broccolini" : occasionally_eat_default,
  "brussels sprouts" : occasionally_eat_bloating_default,
  "cauliflower" : occasionally_eat_default,
  "cilantro" : occasionally_eat_default,
  "corn" : occasionally_eat_bloating_default,
  "dill" : occasionally_eat_default,
  "elderberries" : occasionally_eat_default,
  "honeydew" : occasionally_eat_default,
  "kale" : occasionally_eat_default,
  "kiwifruit" : SSML`
  Yes, but they can only eat kiwifruit one to two times a week.
  Remove the brown, fuzzy skin first.`,
  "lavender" : occasionally_eat_default,
  "mango" : occasionally_eat_default,
  "melon" : occasionally_eat_default,
  "nectarine" : occasionally_eat_default,
  "okra" : occasionally_eat_default,
  "orange" : SSML`
  Yes, but be careful citrus can cause mouth sores.
  Feed only one to two times a week.`,
  "papaya" : occasionally_eat_default,
  "parsely" : occasionally_eat_default,
  "peach" : occasionally_eat_default,
  "pears" : occasionally_eat_default,
  "pineapple" : SSML`
  Yes, but be careful citrus can cause mouth sores.
  Feed only one to two times a week.`,
  "plum" : occasionally_eat_default,
  "quince" : occasionally_eat_default,
  "spinach" : occasionally_eat_bloating_default,
  "starfruit" : occasionally_eat_default,
  "strawberries" : occasionally_eat_default,
  "thyme" : occasionally_eat_default,
  "wheatgrass" : occasionally_eat_default
}

const rarely_eat_default = SSML`
<speak>
Yes, but very rarely. Only about one to two times a month.
</speak>`

// Food can only be eaten one to two times a month
const rarely_eat = {
  "banana" : SSML`
  <speak>
  Yes, but very rarely. Only about one to two times a month.
  Eating too much banana can cause constipation.
  </speak>`,
  "beet" : SSML`
  <speak>
  Yes, but the leaves should be given rarely.
  </speak>`,
  "carrots" : rarely_eat_default,
  "cherries" : rarely_eat_default,
  "eggplant" : rarely_eat_default,
  "kumquat" : rarely_eat_default,
  "mandrin" : rarely_eat_default,
  "oregano" : rarely_eat_default,
  "passionfruit" : rarely_eat_default,
  "peppermint" : rarely_eat_default,
  "persimmon" : rarely_eat_default,
  "pumpkin" : rarely_eat_default,
  "radishes" : rarely_eat_default,
  "spearmint" : rarely_eat_default,
  "sweet potato" : rarely_eat_default,
  "taro leaves" : rarely_eat_default,
  "tomato" : rarely_eat_default
}

const never_eat_default = SSML`
<speak>
No, guinea pigs digestive systems are not set up to digest anything but plants!
</speak>`

const never_eat_blood = SSML`
<speak>
No, eating it could lead to blood disorders
</speak>`

const never_eat = {
  "avocado" : SSML`
  <speak>
  No, don't feed them avocados.
  The green creamy inside of avocados is too fatty.
  The seed and skin are poisonous as well.
  </speak>`,
  "meat" : never_eat_default,
  "dairy" : never_eat_default,
  "onions" : never_eat_blood,
  "leeks" : never_eat_blood,
  "chives" : never_eat_blood,
  "shallots" : never_eat_blood,
  "garlic" : SSML`
  <speak>
  No, garlic is poisonous for cavies!
  </speak>`,
  "rhubarb" : SSML`
  <speak>
  No, eathing rhubarb can cause kidney and urinary tract stones.
  </speak>`,
  "plastic" : SSML`
  <speak>
  No, plastic bits are indigestible and can be sharp and hurt your guinea pig!
  </speak>`
}

const default_response =
  SSML`
  <speak>
  No
  </speak>`

module.exports = deepFreeze({
  daily_eat,
  frequent_eat,
  occasionally_eat,
  rarely_eat_default,
  rarely_eat,
  never_eat,
  default_response
});
