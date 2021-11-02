__path = process.cwd()
const tokens = [{"value": "GevdnxokdnUegjdienDdbdjo"}]
const users = [{"username": "guest","email": "nf@nf.io","password": "Bisnis"}]
var cok = ["ANDREW","KELLY","MAXIM","ADAM","PRIMIS","CAROLINE","KAPPELA","FORD","MISYA","RAFAELA","ANTONIO","JOSEPH","WOLFRAH","ALOK","EVE","NULA","K","ALFARO"]
const cok2 = ["https://j.top4top.io/p_2000nz52c0.jpg","https://f.top4top.io/p_2000d8zax0.jpg","https://c.top4top.io/p_20005873f0.jpg","https://c.top4top.io/p_20005873f0.jpg","https://f.top4top.io/p_2000law1b0.jpg","https://f.top4top.io/p_2000law1b0.jpg","https://a.top4top.io/p_20008ycwg0.jpg","https://a.top4top.io/p_20008ycwg0.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://k.top4top.io/p_2000vcx7b0.jpg","https://k.top4top.io/p_2000vcx7b0.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://i.top4top.io/p_20004n6yr0.jpg","https://k.top4top.io/p_2000er2p70.jpg","https://k.top4top.io/p_2000er2p70.jpg","https://f.top4top.io/p_200090elb0.jpg","https://f.top4top.io/p_200090elb0.jpg","https://i.top4top.io/p_2000ijyh60.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://f.top4top.io/p_2001xk3710.jpg","https://f.top4top.io/p_2001xk3710.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://f.top4top.io/p_2001cm0tf0.jpg","https://f.top4top.io/p_2001cm0tf0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://e.top4top.io/p_20014ubtk0.jpg","https://e.top4top.io/p_20014ubtk0.jpg","https://j.top4top.io/p_20011c1110.jpg","https://j.top4top.io/p_20011c1110.jpg","https://i.top4top.io/p_2001xfygs0.jpg","https://i.top4top.io/p_2001xfygs0.jpg","https://i.top4top.io/p_2001xfygs0.jpg"]
const pap = cok2[Math.floor(Math.random() * cok2.length)];
var c = cok[Math.floor(Math.random() * cok.length)];
var express = require('express');
var base64  = require('base-64')
var { Base } = require('./../lib');

var router = express.Router();
var bodyParser = require('body-parser'); 

const encc = (text) => {
    anu = base64.encode(text)
    return `${anu}`
}

const decc = (text) => {
    Base('b64dec', text)
    .then(res => {
         return res.string
    })
}

const generateToken = (email, password) => {
var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'--LOGGER';
        return randomTextNumber
}

const tuh = (email, password) => {
    const user = users.find(u => {
        return u.email === email && password === u.password
    });
    if (user) {
        return "verify"
    } else {
        return "not"
    }
}
router.get('/bs', (req, res) => {
    tod = encc('tod')
    res.json({
          status: 200,
          result: tod
    })
})

router.get('/token', (req, res) => {
    anu = generateToken(tes, tree)
    res.json({
          result: anu,
          status: 200
    })
})

router.get('/register', (req, res) => {
    res.sendFile(__path + '/views/auth/register.html');
});

router.post('/register', (req, res) => {
    const { username, email, password, password2 } = req.body;

    // Check if the password and confirm password fields match
    if (password === password2) {

        // Check if user with the same email is also registered
        if (users.find(user => user.email === email)) {

            res.sendFile(__path + '/views/auth/register.html');
        }

        // Store user into the database if you are using one
        users.push({username,email,password});

        res.redirect('/login');
    } else {
        res.sendFile(__path + '/views/auth/register.html');
    }
});

router.get('/docs', (req, res, next) => {
    const key1 = req.query.HSID
    const key2 = req.query.SHID
    const key3 = req.query.LOGIN_ID
    const nisa = decc(key1)
    const wahyu = decc(key2)
    const user = users.find(u => {
        return u.email === nisa && wahyu === u.password
    });
    const session = tokens.find(i => {
        return i.value === key3
    });

        if (user) {
             if (session) {
                  res.sendFile(__path + '/views/docs.html');
             } else {
                  res.redirect('/login')
             }
        } else {
             res.redirect('/login')
        }
});

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

/*router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})*/

router.get('/mabar', (req, res) => {
    res.sendFile(__path + '/views/mabar.html')
})

router.get('/index.html', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/login', (req, res) => {
    res.sendFile(__path + '/views/auth/login.html')
})

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(u => {
        return u.email === email && password === u.password
    });
    if (user) {
        t = generateToken(email, password)
        tokens.push({value: t});
        res.redirect('/docs?account=true&HSID='+encc(email)+'&SHID='+encc(password)+'&LOGIN_ID='+t);
    } else { 
        res.redirect('/register')
    }
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
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
            prefix : '^',
            namabot: 'Brainchan',
            namaowner: 'Fhans',
            nomorbot: '081247374916',
            youtube : 'Fhans Dz'
        }
    }
    res.json(config)
})

/*router.get('/register', (req, res) => {
    config = {
        status: true,
        result: {
            Apikey: 'FhansGanss',
            Status: 'aktif',
            Creator: 'Fhans'
        }
    }
    res.json(config)
})*/

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
