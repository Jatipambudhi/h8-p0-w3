function dataHandling2(input){

  input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
  console.log(input)

  var bulan = input[3][4]
   switch(bulan){
      case '1':
      console.log("Januari")
      break
      case '2':
      console.log("Februari")
      break
      case '3':
      console.log("Maret")
      break
      case '4':
      console.log("April")
      break;
      case '5':
      console.log("Mei")
      break;
      default:
      console.log("Mohon maaf, bulan ini tidak tersedia dalam kalender")
      break;
  } 

  var tanggal = input[3]
  var splitTanggal = tanggal.split("/")
  console.log(splitTanggal.sort(function(a,b){return b-a}))

  console.log(tanggal.split("/").join("-"))

  var firstLastName = input[1]
  console.log(firstLastName.slice(0,14))
 
}

dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])