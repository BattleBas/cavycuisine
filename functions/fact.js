const FactResponses = require('./responses/fact_responses.js');

module.exports = class Fact {
    getRandom () {
        let response = FactResponses.fun_facts[Math.floor(Math.random() * FactResponses.fun_facts.length)];
        return response;
    }
}