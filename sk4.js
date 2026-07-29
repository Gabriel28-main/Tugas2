let kaloriMakananHarian = [120, 1000, 5000, 200]
let angkaBatasKalori = 6000

function evaluasiAsupanKalori(kaloriMakanan, BatasKalori) {
    let totalKalori = 0
    for (let i = 0; i < kaloriMakananHarian.length; i++){
        totalKalori += kaloriMakanan[i]
    }

    if(totalKalori === angkaBatasKalori){
        statusAsupan = 'Pas'
        pesan = 'Aman Jo, pas pas ji kalori mu'
    }else if(totalKalori > angkaBatasKalori){
        statusAsupan = 'Melebihi Target'
        pesan = 'Deh, lebih ini iya'
    }else{
        statusAsupan = 'Kurang dari Target'
        pesan = 'deh, kurang makan. tena injo makanan di perutmu, nak'
    }

    console.log(statusAsupan, pesan)
}

evaluasiAsupanKalori(kaloriMakananHarian, angkaBatasKalori)