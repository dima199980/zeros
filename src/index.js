function zeros(expression) {
    var arrayExpression = expression.split('*');
    var counterZeroFive = 0;
    var counterZeroTwo = 0;
    for (let i = 0; i <= arrayExpression.length - 1; i++) {

        if (arrayExpression[i].indexOf('!!') >= 1) {
            counterZeroFive = counterZeroFive + getDoubleFactorialZero(parseInt(arrayExpression[i]), 5);
            counterZeroTwo = counterZeroTwo + getDoubleFactorialZero(parseInt(arrayExpression[i]), 2);
        } else {
            counterZeroFive = counterZeroFive + getFactorialZero(parseInt(arrayExpression[i]), 5);
            counterZeroTwo = counterZeroTwo + getFactorialZero(parseInt(arrayExpression[i]), 2);
        }
    }
    if (counterZeroFive >= counterZeroTwo) {
        return counterZeroTwo
    } else {
        return counterZeroFive;
    }
}

function getZero(numerator, denominator, count) {
    if ((numerator % denominator) === 0) {
        return getZero(numerator / denominator, denominator, ++count)
    } else {
        return count;
    }
}

function getFactorialZero(elem, fiveOrTwo) {
    let fiveCounter = 0;
    for (let i = 1; i <= elem; i++) {

        fiveCounter = fiveCounter + getZero(i, fiveOrTwo, 0);
    }
    return fiveCounter;
}

function getDoubleFactorialZero(elem, fiveOrTwo) {
    let fiveCounter = 0;
    if (elem % 2 == 0) {
        for (let i = 2; i <= elem; i++) {
            if (i % 2 == 0) {
                fiveCounter = fiveCounter + getZero(i, fiveOrTwo, 0);
            }
        }
        return fiveCounter;
    } else {
        for (let i = 1; i <= elem; i++) {
            if (i % 2 !== 0) {
                fiveCounter = fiveCounter + getZero(i, fiveOrTwo, 0);
            }
        }
        return fiveCounter;
    }

}

module.exports = {
    zeros
};