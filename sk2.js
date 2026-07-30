const dataMahasiswa = [
    {
        namaMahasiswa: 'Budi',
        IPK: 3.5,
        pendapatanOrangTua: 5000000
    },
    {
        namaMahasiswa: 'Dimas',
        IPK: 2.5,
        pendapatanOrangTua: 2500000
    },
    {
        namaMahasiswa: 'Andi',
        IPK: 1.5,
        pendapatanOrangTua: 10000000
    },
    {
        namaMahasiswa: 'Yanto',
        IPK: 4.0,
        pendapatanOrangTua: 100000000
    },
]


function seleksiBeasiswa(dataTheMahasiswa) {

    for (let i = 0; i < dataTheMahasiswa.length; i++) {
        if (dataTheMahasiswa[i].IPK >= 3.5 && dataTheMahasiswa[i].pendapatanOrangTua <= 5000000) {
            statusKelulusan = 'Lolos'
        } else {
            statusKelulusan = 'Tidak Lolos'
        }
        console.log(`${dataTheMahasiswa[i].namaMahasiswa} dinyatakan ${statusKelulusan}`)
    }
}


seleksiBeasiswa(dataMahasiswa)