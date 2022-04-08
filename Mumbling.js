function accum(s) {
    let i=0
    return s.split('').map(function(x){ return x.charAt(0).toUpperCase()+ x.repeat(i++).toLowerCase() + '-'} ).join('').slice(0,-1)
  }

function accum(s) {
return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

function accum(s) {
    return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
  }

function accum (s) {
return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
}).join('-');
}