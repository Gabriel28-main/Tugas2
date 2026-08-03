let daftarJamKerja = [5, 6, 7, 8, 9, 10] //turut memprihatinkan buat yang jam kerjannya cek gini cak.

function hitunGajiMingguan(daftarjamkerja) {
    const baseSalary = 50000
    const baseLemburSalary = 75000

    let totalWorkHours = 0
    for (let i = 0; i < daftarJamKerja.length; i++) {
        totalWorkHours += daftarJamKerja[i]
    }

    const lemburHours = totalWorkHours - 40

    if (totalWorkHours > 40) {
        totalLemburSalary = lemburHours * baseLemburSalary
    }

    const totalSalary = (baseSalary * 40) + totalLemburSalary

    return console.log(`Jadi Total gaji bersih mingguan adalah ${totalSalary}`)

}


hitunGajiMingguan(daftarJamKerja)