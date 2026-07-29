let daftarRestoran = [
    {
        namaRestoran: 'Lazuna Talasalapang',
        rating: 5,
        buka: true
    },
    {
        namaRestoran: 'Golqi Minasa Upa',
        rating: 4.5,
        buka: true
    },
    {
        namaRestoran: 'Hisana Katangka',
        rating: 3.5,
        buka: true
    },
    {
        namaRestoran: 'Mie Palu',
        rating: 5,
        buka: true
    },
    {
        namaRestoran: 'Bakpao Lompo Battang',
        rating: 6,
        buka: true
    },
    {
        namaRestoran: 'Restoran yang Tutup',
        rating: 2.9,
        buka: false
    },
]

function filterRestoranFavorit(daftarRestoran) {
    const sesuaiKriteria = []

    for (let i = 0; i < daftarRestoran.length; i++) {
        if (daftarRestoran[i].rating >= 4.5 && daftarRestoran[i].buka == true) {
            sesuaiKriteria.push(daftarRestoran[i])
        }
    }

    return console.log(sesuaiKriteria)
}


filterRestoranFavorit(daftarRestoran)