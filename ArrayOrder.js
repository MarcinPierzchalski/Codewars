// function order(words){
//     let arr = words.split(' ')
//     let res = []
//     let count = 1

//     while(arr.length !==0){
//         for(let i=0;i<arr.length;i++){
//             if(count == arr[i].replace(/[^0-9]/g, "")) {
//                 res.push(arr[i]);
//                 count++;
//                 arr.splice(i,1);
//                 i--;
    
//                 // console.log(arr);
//             }
//         }
//     }
//     return(res.join(' '))
//   }

//   console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

function compareNumbers(a, b) {
    return a.replace(/[^0-9]/g, "") - b.replace(/[^0-9]/g, "");
  }

function order(words){
    let arr = words.split(' ')
    arr.sort(compareNumbers)
    console.log(arr.join(' '))
}


 order("fS4of Fo1r pe6ople g3ood th5e the2")

function order(words){

return words.split(' ').sort(function(a, b){
    return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}



