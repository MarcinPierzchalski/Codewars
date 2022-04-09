function getMiddle(s){
    console.log(s)
    let num = s.length
    if(num%2 ==0) return s.slice(num/2-1,num/2+1)
    else return s.slice(Math.floor(num/2),Math.floor(num/2)+1)
  
    //Code goes here!+
  }

function getMiddle(s)
{
return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

