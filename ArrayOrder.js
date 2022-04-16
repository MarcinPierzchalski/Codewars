function order(words){
    let arr = words.split(' ')
    console.log(arr)
    
    let res = []
    while(arr.length !==0){
        console.log(arr)
      for(let i=1;i<=arr.length; i++){
        test  = arr[i-1].replace(/[^0-9]/g, "")
        // console  2.log(test)
        if(i-1 === test){
            // console.log(arr)
            res.push(arr[i-1])
            arr.splice(i-1,1)
            i--
            console.log(res)
        }
      }
    }
    // console.log(res)
  }

  order("is2 Thi1s T4est 3a")