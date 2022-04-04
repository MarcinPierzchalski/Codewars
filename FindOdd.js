function findOdd(A) {
    //happy coding!
    let SA = Array.from(new Set(A))
    console.log(SA)
    let max = null
    let num = null
    for(let i=0; i<=SA.length-1;i++){
        let j = A.filter(x => x === SA[i]).length
        if((j>max) && (j%2 !== 0)){
            max = j
            num = SA[i]
        }
      
    }
    return num
  }



const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

  function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }