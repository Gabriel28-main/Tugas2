let dataPemain = [
    {
        nama: 'Dimas',
        skor: 900
    },
    {
        nama: 'Excel',
        skor: 899
    },
    {
        nama: 'Farrel',
        skor: 700
    },
    {
        nama: 'Agustinus Ronald',
        skor: 1200
    },
    {
        nama: 'susiono',
        skor: 500
    },
]


function prosesLeaderBoard(dataThePlayers) {
    let daftarKategoriPemain = []
    for (let i = 0; i < dataThePlayers.length; i++) {
        if (dataThePlayers[i].skor >= 900) {
            daftarKategoriPemain.push(
                {
                    data: dataThePlayers[i],
                    kategori: 'Gold Tier'
                }
            )
        } else if (dataThePlayers[i].skor >= 700) {
            daftarKategoriPemain.push(
                {
                    data: dataThePlayers[i],
                    kategori: 'Silver Tier'
                }
            )
        } else {
            daftarKategoriPemain.push(
                {
                    data: dataThePlayers[i],
                    kategori: 'Bronze Tier'
                }
            )
        }
    }

    return console.log(daftarKategoriPemain)
}

prosesLeaderBoard(dataPemain)