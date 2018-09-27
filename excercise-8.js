function pasanganTerbesar(num) {
    myNum = num.toString();
    digit = myNum.split("");
    biggestNumber = "";
  
    for(i=0 ; i<digit.length; i++){
      if(biggestNumber < (digit[i]+digit[i+1])){
        biggestNumber = (digit[i]+digit[i+1])
      }
    }
    return biggestNumber
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log(pasanganTerbesar(91828282882991));