__path = process.cwd()

var cok = ["ANDREW","KELLY","MAXIM","ADAM","PRIMIS","CAROLINE","KAPPELA","FORD","MISYA","RAFAELA","ANTONIO","JOSEPH","WOLFRAH","ALOK","EVE","NULA","K","ALFARO"]
const cok2 = ["https://j.top4top.io/p_2000nz52c0.jpg","https://f.top4top.io/p_2000d8zax0.jpg","https://c.top4top.io/p_20005873f0.jpg","https://c.top4top.io/p_20005873f0.jpg","https://f.top4top.io/p_2000law1b0.jpg","https://f.top4top.io/p_2000law1b0.jpg","https://a.top4top.io/p_20008ycwg0.jpg","https://a.top4top.io/p_20008ycwg0.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://k.top4top.io/p_2000vcx7b0.jpg","https://k.top4top.io/p_2000vcx7b0.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://i.top4top.io/p_20004n6yr0.jpg","https://k.top4top.io/p_2000er2p70.jpg","https://k.top4top.io/p_2000er2p70.jpg","https://f.top4top.io/p_200090elb0.jpg","https://f.top4top.io/p_200090elb0.jpg","https://i.top4top.io/p_2000ijyh60.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://f.top4top.io/p_2001xk3710.jpg","https://f.top4top.io/p_2001xk3710.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://f.top4top.io/p_2001cm0tf0.jpg","https://f.top4top.io/p_2001cm0tf0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://e.top4top.io/p_20014ubtk0.jpg","https://e.top4top.io/p_20014ubtk0.jpg","https://j.top4top.io/p_20011c1110.jpg","https://j.top4top.io/p_20011c1110.jpg","https://i.top4top.io/p_2001xfygs0.jpg","https://i.top4top.io/p_2001xfygs0.jpg","https://i.top4top.io/p_2001xfygs0.jpg"]
const pap = cok2[Math.floor(Math.random() * cok2.length)];
var c = cok[Math.floor(Math.random() * cok.length)];
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/mabar', (req, res) => {
    res.sendFile(__path + '/views/mabar.html')
})

router.get('/index.html', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/#', (req, res) => {
    res.sendFile(__path + '/views/ririt.html')
})

/*router.get('/api/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})*/

router.get('/api/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'muktybotz',
            namaowner: 'Fhans',
            nomorbot: '081247374916',
            youtube : 'MuktyBotz'
        }
    }
    res.json(config)
})

router.get('/register', (req, res) => {
    config = {
        status: true,
        result: {
            Apikey: 'FhansGanss',
            Status: 'aktif',
            Creator: 'Fhans'
        }
    }
    res.json(config)
})

router.get('/linkbokep', (req, res) => {
    config = {
        status: true,
        result: {
            link1: '178.128.220.28',
            link2: '164.68.l27.15 ',
            link3: '164.68.111.161',
            link4: '157.230.193.154',
            link5: '178.128.62.5',
            Creator: 'Fhans'
        }
    }
    res.json(config)
})

router.get('/randomkarakterfreefire', (req, res) => {
    config = {
        status: true,
        result: {
            Creator: 'Fhans',
            Hasil: '${c}'
        }
    }
    res.json(config)
})

router.get('/contack', (req, res) => {
    config = {
        status: true,
        result: {
            Creator: 'Fhans',
            Wa1: '081393668101',
            Wa2: '081247374916',
            Tlpn: '0813931442009',
            Fb: 'Fhans Tzy'
        }
    }
    res.json(config)
})

router.get('/unchek', (req, res) => {
    config = {
        status: false,
        message: 'Tidak ada unchek Free Untuk Hari ini'
    }
    res.json(config)
})

router.get('/paptt1', (req, res) => {
    config = {
        status: 200,
        message: 'Sangean si goblok',
        creator: 'FHANS DZ × MUKTY CANS',
        result : {
            hasil: pap,
            pesan: 'tobat bro'
        }
    }
    res.json(config)
})

module.exports = router
