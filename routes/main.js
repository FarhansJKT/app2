__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
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

module.exports = router
