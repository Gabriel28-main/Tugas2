const namaMahasiswa = ['Budi', 'Dimas', 'Andi', 'Yanto']
const ipkMahasiswa = [3.5, 2.5, 1.5, 4.0]
const pendapatanOrangTua = [5000000, 2500000, 10000000, 100000000]


function seleksiBeasiswa(namaMahasiswa, IPK, pendapatanOrangTua) {

    for (let i = 0; i < namaMahasiswa.length; i++) {
        if (IPK[i] >= 3.5 && pendapatanOrangTua[i] <= 5000000) {
            statusKelulusan = 'Lolos'
        } else {
            statusKelulusan = 'Tidak Lolos'
        }
        console.log(`${namaMahasiswa[i]} dinyatakan ${statusKelulusan}`)
    }
}


seleksiBeasiswa(namaMahasiswa, ipkMahasiswa, pendapatanOrangTua)