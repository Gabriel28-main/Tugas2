const produk = [
    {
        produk: 'Susa Laptop',
        stok: 6,
        keAktifan: true
    },
    {
        produk: 'Ikan Patin',
        stok: 10,
        keAktifan: true
    },
    {
        produk: 'Ikan Tuna',
        stok: 4,
        keAktifan: true
    },
    {
        produk: 'Ikan Paus',
        stok: 0,
        keAktifan: false
    },
    {
        produk: 'Ikan Lele',
        stok: 2,
        keAktifan: true
    },

]
const batasMinimumStok = 5

function cekRestockGudang(daftarProduk, thershold) {
    let wajibRestock = []

    for (let i = 0; i < daftarProduk.length; i++) {
        if (daftarProduk[i].stok < thershold && daftarProduk[i].keAktifan == true) {
            wajibRestock.push(daftarProduk[i])
        }
    }

    return console.log(`Daftar Barang Wajib Restock:`, wajibRestock)
}

cekRestockGudang(produk, batasMinimumStok)
