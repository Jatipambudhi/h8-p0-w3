function balikString(kata){
  var newKata = ''
  for(var i = 0; i < kata.length; i++){
    newKata += kata[kata.length - 1 - i]
  }

  return newKata
}

// TEST CASES //
console.log(balikString("Hello World!"))