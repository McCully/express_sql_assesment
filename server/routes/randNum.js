var randomNumber = function(min,max){
    return Math.floor(Math.random() * (min + max - min) + min);
}

exports.randomNumber = randomNumber;
