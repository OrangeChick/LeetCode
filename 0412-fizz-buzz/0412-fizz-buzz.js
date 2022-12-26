/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let total = [];
    for(let number = 1; number <= n; number++){
        total.push(Number(number));
    }

    let result = [];
    for(let i = 0; i < total.length; i++){
        if(total[i] % 15 === 0){result.push("FizzBuzz")}
        else if(total[i] % 3 === 0){result.push("Fizz")}
        else if(total[i] % 5 === 0 ){result.push("Buzz")}
        else{result.push(String(total[i]))}
    }

    return result;
};