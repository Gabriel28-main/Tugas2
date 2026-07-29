let daftarPlat = [1445, 1192, 1998, 1945]
let angkaTanggalHari = 28


function jenisTanggal(nomorPlat, tanggal) {
    let statusIzin
    let kendaraanBolehMasuk = []
    let kendaraanTidakBolehMasuk = []
    let kategoriTanggal

    for (let i = 0; i < daftarPlat.length; i++) {
        let nomorPlatSingle = nomorPlat[i]
        if (nomorPlat[i] % 2 === tanggal % 2 ) {
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