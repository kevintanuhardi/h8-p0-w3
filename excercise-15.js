function groupAnimals(animals) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newArr = [];
  
    for(i=0; i<alphabet.length ; i++){
      var container = []
      for(j=0; j<animals.length; j++){
        if(animals[j][0] == alphabet[i]){
          container.push(animals[j]);
        }
      }
      if(container.length !== 0){
        newArr.push(container)
        }
    }
    return newArr
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]