function findShort(s){
    return Math.min(...s.split(' ').map(x => parseInt(x.length)))
  }

function findShort(s){
return Math.min.apply(null, s.split(' ').map(w => w.length));
}

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}