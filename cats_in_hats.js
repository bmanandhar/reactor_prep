function cats_in_hats(){
  var cats_with_hats = []
  var cats = []
  var length = 10;
  for (var i = 0; i < length; i++){
    cats[i] = false
  };
  console.log(cats)
  for (var rnd = 1; rnd < 11; rnd ++){
    for (var i = rnd - 1; i < cats.length; i += rnd){
      if (i % rnd == 0 && cats[i] == false){
          cats[i] = true
          if (i % rnd == 0 && cats[i] == true){
            cats[i] = false
          }
        }
      }
    }
  }
  return cats
}
console.log(cats_in_hats());
