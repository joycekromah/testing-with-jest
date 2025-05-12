const { error } = require('selenium-webdriver');
const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    
    // Om prompten är en tom sträng så läggs den inte till i listan
    if (x === "") {
        return;
    }    

    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}