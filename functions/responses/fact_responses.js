const deepFreeze = require('deep-freeze');
const SSML = require('../ssml')

const fun_facts = [
    SSML`
    <speak>
    “Cavy” is the short version of their official name, Cavia Porcellus.
    </speak>`,
    SSML`
    <speak>
    The American/English guinea pigs have short hair with a smooth coat.
    </speak>`,
    SSML`
    <speak>
    The Abyssinian guinea pig has a wiry coat with hair that forms swirls similar to rosettes.
    </speak>`,
    SSML`
    <speak>
    Peruvian guinea pigs have straight, long and silky hair.
    </speak>`,
    SSML`
    <speak>
    Guinea pigs are not related to pigs and they do not come from Guinea.
    </speak>`,
    SSML`
    <speak>
    The life span of a guinea pig is between four to seven years, the better a guinea pig is looked after, the longer they will live.
    </speak>`,
    SSML`
    <speak>
    Guinea pigs are herbivores and they mainly live on grass and hay
    </speak>`,
    SSML`
    <speak>
    Guinea pigs teeth continue growing throughout their lives, which is why it's important for them to constantly gnaw on things in order to wear their teeth down
    </speak>`,
    SSML`
    <speak>
    Baby guinea pigs are called “pups” and are born with fur and their eyes open
    </speak>`,
    SSML`
    <speak>
    Guinea pigs are very social animals and they are much happier when kept in pairs or groups
    </speak>`,
    SSML`
    <speak>
    A female guinea pig is called a sow and the males are referred to as boars
    </speak>`,
    SSML`
    <speak>
    Guinea pigs make lots of different noises when they want to express themselves. This includes squealing, chirping, rumbling, purring and chirping
    </speak>`
]

module.exports = deepFreeze({
    fun_facts
  });