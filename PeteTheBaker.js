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



  console.log(cakes(recipe, available))