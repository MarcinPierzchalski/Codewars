function findOutlier(integers){
    let odds = []
    let evens = []
    for(let i=0;i<integers.length;i++){
      if(integers[i]%2 == 0) evens.push(integers[i])
      else odds.push(integers[i])
    }
    if(evens.length < odds.length) return Number(evens)
    else return Number(odds)
  
    
    //your code here
  }

function findOutlier(int){
var even = int.filter(a=>a%2==0);
var odd = int.filter(a=>a%2!==0);
return even.length==1? even[0] : odd[0];
}