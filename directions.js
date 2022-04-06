function dirReduc(arr){
    for(let i=0;i<arr.length; i++){
      if((arr[i] === 'NORTH' && arr[i+1] == 'SOUTH') || (arr[i] === 'SOUTH' && arr[i+1] == 'NORTH') 
      || (arr[i] === 'WEST' && arr[i+1] == 'EAST') || (arr[i] === 'EAST' && arr[i+1] == 'WEST')){
        arr.splice(i,1)
        i--
        arr.splice(i+1,1)
        i--
      }
      
      
    }
    return(arr)
    // ...
  }


  function dirReduc(plan) {
    var opposite = {
      'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        if (dirs[dirs.length - 1] === opposite[dir])
          dirs.pop();
        else
          dirs.push(dir);
        return dirs;
      }, []);
  }


  function dirReduc(arr){
    var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
    return arr.reduce(function (a, b, i) {
      opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
      return a
    }, [])
  }