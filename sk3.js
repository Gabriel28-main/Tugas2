let daftarPlat = [1445, 1192, 1998, 1945]
let angkaTanggalHari = 28


function jenisTanggal(nomorPlat, tanggal) {
    let statusIzin
    let kendaraanBolehMasuk = []
    let kendaraanTidakBolehMasuk = []
    let kategoriTanggal

    if (tanggal % 2 === 0) {
        kategoriTanggal = 'Genap'
    } else {
        kategoriTanggal = 'Ganjil'
    }

    for (let i = 0; i < daftarPlat.length; i++) {
        let nomorPlatSingle = nomorPlat[i]
        if (nomorPlat[i] % 2 === 0) {
            statusIzin = 'diizinkan masuk.'
            kendaraanBolehMasuk.push(`${nomorPlat[i]} ${statusIzin}`)
        } else {
            statusIzin = 'tidak diizinkan masuk.'
            kendaraanTidakBolehMasuk.push(`${nomorPlat[i]} ${statusIzin}`)
        }
    }

    console.log(kendaraanBolehMasuk )
}

jenisTanggal(daftarPlat, angkaTanggalHari)