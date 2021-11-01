__path = process.cwd()
const users = [{"email": "nf@nf.io","password": "Bisnis"}]
var cok = ["ANDREW","KELLY","MAXIM","ADAM","PRIMIS","CAROLINE","KAPPELA","FORD","MISYA","RAFAELA","ANTONIO","JOSEPH","WOLFRAH","ALOK","EVE","NULA","K","ALFARO"]
const cok2 = ["https://j.top4top.io/p_2000nz52c0.jpg","https://f.top4top.io/p_2000d8zax0.jpg","https://c.top4top.io/p_20005873f0.jpg","https://c.top4top.io/p_20005873f0.jpg","https://f.top4top.io/p_2000law1b0.jpg","https://f.top4top.io/p_2000law1b0.jpg","https://a.top4top.io/p_20008ycwg0.jpg","https://a.top4top.io/p_20008ycwg0.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://d.top4top.io/p_2000bkai10.jpg","https://k.top4top.io/p_2000vcx7b0.jpg","https://k.top4top.io/p_2000vcx7b0.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://l.top4top.io/p_2000yizt80.jpg","https://i.top4top.io/p_20004n6yr0.jpg","https://k.top4top.io/p_2000er2p70.jpg","https://k.top4top.io/p_2000er2p70.jpg","https://f.top4top.io/p_200090elb0.jpg","https://f.top4top.io/p_200090elb0.jpg","https://i.top4top.io/p_2000ijyh60.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://h.top4top.io/p_2000bj0rx0.jpg","https://f.top4top.io/p_2001xk3710.jpg","https://f.top4top.io/p_2001xk3710.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://h.top4top.io/p_2001uiy7d0.jpg","https://f.top4top.io/p_2001cm0tf0.jpg","https://f.top4top.io/p_2001cm0tf0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://a.top4top.io/p_2001dvwvb0.jpg","https://e.top4top.io/p_20014ubtk0.jpg","https://e.top4top.io/p_20014ubtk0.jpg","https://j.top4top.io/p_20011c1110.jpg","https://j.top4top.io/p_20011c1110.jpg","https://i.top4top.io/p_2001xfygs0.jpg","https://i.top4top.io/p_2001xfygs0.jpg","https://i.top4top.io/p_2001xfygs0.jpg"]
const pap = cok2[Math.floor(Math.random() * cok2.length)];
var c = cok[Math.floor(Math.random() * cok.length)];
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var exphbs = require('express-handlebars');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 

router.use(cookieParser());

router.get('/register', (req, res) => {
    res.render(__path + '/views/auth/register.hbs');
});

router.post('/register', (req, res) => {
    const { email, firstName, lastName, password, confirmPassword } = req.body;

    // Check if the password and confirm password fields match
    if (password === confirmPassword) {

        // Check if user with the same email is also registered
        if (users.find(user => user.email === email)) {

            res.sendFile(__path + '/views/auth/register.hbs', {
                message: 'User already registered.',
                messageClass: 'alert-danger'
            });

            return;
        }

        // Store user into the database if you are using one
        users.push({
            firstName,
            lastName,
            email,
            password
        });

        res.sendFile(__path + '/views/auth/login.hbs', {
            message: 'Registration Complete. Please login to continue.',
            messageClass: 'alert-success'
        });
    } else {
        res.sendFile(__path + '/views/auth/register.hbs', {
            message: 'Password does not match.',
            messageClass: 'alert-danger'
        });
    }
});

const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}

const authTokens = {};

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => {
        return u.email === email && password === u.password
    });

    if (user) {
        const authToken = generateAuthToken();

        // Store authentication token
        authTokens[authToken] = user;

        // Setting the auth token in cookies
        res.cookie('AuthToken', authToken);

        // Redirect user to the protected page
        res.redirect('/docs');
    } else {
        res.sendFile(__path + '/views/auth/login.hbs', {
            message: 'Invalid username or password',
            messageClass: 'alert-danger'
        });
    }
});

router.use((req, res, next) => {
    // Get auth token from the cookies
    const authToken = req.cookies['AuthToken'];

    req.user = authTokens[authToken];

    next();
});

router.get('/docs', (req, res) => {
    if (req.user) {
        res.sendFile(__path + '/views/docs.html');
    } else {
        res.sendFile(__path + '/views/auth/login.hbs', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
});

const requireAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendFile(__path + '/views/auth/login.hbs', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
};

router.get('/docs', requireAuth, (req, res) => {
    res.sendFile(__path + '/views/docs.html');
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
    res.sendFile(__path + '/views/auth/login.hbs')
})

/*router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(u => {
        return u.email === email && password === u.password
    });
    if (user) {
        res.redirect('/docs');
    }
})*/

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
