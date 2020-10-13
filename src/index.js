module.exports = function reverse (n) {
    if(n < 0) n *= -1;
    let str = n + '';
    return +str.split('').reverse().join('');
}
