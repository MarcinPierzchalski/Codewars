function solution(number){

    let A = []
    for(let i = 1; i <= number; i++){
        A.push(i)
    }
    let arr = A.sort((a, b) => a - b)

    let sum=0
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i]%3==0 || arr[i]%5==0) sum=sum+arr[i]
    }
    console.log(sum)
  }

  solution(10)

  function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }