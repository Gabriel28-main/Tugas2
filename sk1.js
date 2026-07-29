let hargaBuku = [150000, 60000, 120000, 165000]

function hitungTotalBuku(hargaBuku) {
    let total = 0
    let diskon = total * 0.15
    for (let i = 0; i < hargaBuku.length; i++) {
        total += hargaBuku[i]
    }

    if (total > 150000) {
        total -= diskon
    }

    console.log(`Harga Total Buku adalah: ${total}`)
}

hitungTotalBuku(hargaBuku)