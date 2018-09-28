function targetTerdekat(arr) {
    arrX = []
    posisi = arr.indexOf("o");
    selisihTerdekat = 99;
  
    for(var i=0; i<arr.length; i++){
      if(arr[i] == "x"){
        arrX.push(i);
      }
    }
  
    for(var j=0; j<arrX.length; j++){
    if((Math.abs(arrX[j]-posisi) < selisihTerdekat) && (arrX.length !== 0)){
        selisihTerdekat = Math.abs(arrX[j]-posisi)
      } else if(arrX.length == 0){
        selisihTerdekat = 0
      }
    }
  
    if (selisihTerdekat === 99) {
      return 0
    }
    return selisihTerdekat
  }