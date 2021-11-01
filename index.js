var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')
var bodyParser = require('body-parser');
var cookie
var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')
    auther = require('./routes/auth')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainrouter)
app.use('/api', apirouter)
app.use('/auth', auther)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
