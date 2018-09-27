function angkaPalindrome(num) {
    num = num+ 1;
   var numString = num.toString();
    var kebalik = numString.split("").reverse().join("");
  
  while(numString !== kebalik){
    num = num + 1
    numString = num.toString();
    kebalik = numString.split("").reverse().join("");
  }
  return num
  }
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001