function order(words){
    let arr = words.split(' ')
    let res = []
    let count = 1

    while(arr.length !==0){
        for(let i=0;i<arr.length;i++){
            if(count == arr[i].replace(/[^0-9]/g, "")) {
                res.push(arr[i]);
                count++;
                arr.splice(i,1);
                i--;
    
                // console.log(arr);
            }

        }
    }
    console.log(res.join(' '))
  }

  order("is2 Thi1s T4est 3a")