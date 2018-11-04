function angkaPalindrome(num) {
  for(var i = 0; i < num; i++){
    num++
    
    var newNum = String(num)
    var pRome = '';
    for(var j = newNum.length - 1; j >= 0; j--){
      pRome += newNum[j]
    }
    if(newNum === pRome){
      return num
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001