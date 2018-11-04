function targetTerdekat(arr) {
  var result = arr.length
  var indexO = arr.indexOf('o')

  if (arr.indexOf('x') === -1) {
    return 0
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
        var angka = Math.abs(indexO - i)
        if (angka < result) {
        result = angka
      }
    }
  }

  return result
}

//TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2