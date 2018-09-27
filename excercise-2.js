function balikString(str){
    var kebalik = "";
    for(i=str.length-1; i>=0; i--){
      kebalik = kebalik + str[i];
    }
    console.log(kebalik);
  }
  
  balikString("hello world!")