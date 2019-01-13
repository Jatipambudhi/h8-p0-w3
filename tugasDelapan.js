function pasanganTerbesar(num) {
  var stringNum = String(num)
  
  var minNum = 0
  var maxNum = 0
  
  for(var i = 0; i < stringNum.length; i++) {
    minNum = stringNum[i] + stringNum[i + 1]
    if(minNum > maxNum) {
      maxNum = minNum
    }
  }
  return Number(maxNum)
}

// TEST CASES // 
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99