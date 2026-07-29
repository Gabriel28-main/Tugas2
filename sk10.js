const daftarEmail = [
  "budi.santoso@example.com",
  "siti.aminahexample.net",       // Invalid: Tidak ada '@'
  "rizky.pratama@exampleorg",      // Invalid: Tidak ada '.'
  "dewi.lestari@example.com",
  "fajarnugrahaexamplecoid",      // Invalid: Tidak ada '@' dan '.'
  "andini.putri@example.net",
  "dimas.setiawanexample.org",     // Invalid: Tidak ada '@'
  "rudi.hermawan@examplecom",      // Invalid: Tidak ada '.'
  "nina.kurnia@example.co.id",
  "tanaka.taro@example.net"
];
function validasiDaftarEmail(email) {
    let emailValid = []
    let emailInvalid = []
    for (let i = 0; i < email.length; i++) {
        if (email[i].includes('@') && email[i].includes('.')){
            emailValid.push(email[i])
        }else {
            emailInvalid.push(email[i])
        }
    }

    return console.log({emailValid, emailInvalid})
}

validasiDaftarEmail(daftarEmail)