const dataPasien = [
    {
        nama: 'Supriadi',
        usia: 65
    },
    {
        nama: 'Muriadi',
        usia: 60
    },
    {
        nama: 'Hermantoso',
        usia: 55
    },
    {
        nama: 'Sugiano',
        usia: 98
    },
    {
        nama: 'Martin',
        usia: 45
    },
]

function kelompokkanAntreaPasien(dataParaPasien) {
    let daftarKategoriPasien = []
    for (let i = 0; i < dataParaPasien.length; i++) {
        if (dataParaPasien[i].usia >= 60) {
            daftarKategoriPasien.push(
                {
                    data: dataParaPasien[i],
                    kategori: 'Prioritas Lansia'
                }
            )
        } else {
            daftarKategoriPasien.push(
                {
                    data: dataParaPasien[i],
                    kategori: 'Antrean Reguler'
                }
            )
        }
    }

    return console.log(daftarKategoriPasien)
}

kelompokkanAntreaPasien(dataPasien)