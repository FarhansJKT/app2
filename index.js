var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')
var bodyParser = require('body-parser');
var session = require('express-session');
var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.use('/', mainrouter)
app.use('/api', apirouter)

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app
