function cakes(recipe, available) {
    console.log(recipe)
    console.log(available)
    let temp = []
    for(let key in recipe) {
        // console.log(key)
        let value = recipe[key];
        for(let key2 in available){
            let value2 = available[key2]
//             console.log(key2)
            if((key2 === key) && (value2/value > 0)) temp.push(Math.floor(value2/value))
        }
    }
    // console.log(Object.keys(recipe).length)
    // console.log(temp.length)
    if((Object.keys(recipe).length) === (temp.length)) return Math.min(...temp)
    else return 0

    // return temp

  }


  let recipe = {flour: 500, sugar: 200, eggs: 1};
  let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};


  function cakes(recipe, available) {
    return Object.keys(recipe).reduce(function(val, ingredient) {
      return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
    }, Infinity)  
  }

  const cakes = (needs, has) => Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  )




  console.log(cakes(recipe, available))