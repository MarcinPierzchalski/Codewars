function bits(n) {

    return n.toString(2).split('').filter(x => x === '1').length  };

console.log(bits(10))