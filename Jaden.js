String.prototype.toJadenCase = function () {
    return(this.split(' ').map(x => x[0].toUpperCase()+x.slice(1)).join(' '))
  };

  'try me now'.toJadenCase()


String.prototype.toJadenCase = function () { 
return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(" ");
}