const ejs           = require('ejs')
const express       = require('express')
const favicon       = require('express-favicon')
const session       = require('express-session')
const bodyParser    = require('body-parser')
const multer        = require('multer')
const Model         = require('./models')
const authSession   = require('./helpers/authLogin')
const app           = express()
const port          = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', './views')
app.set('view cache', false)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public/admin', express.static(process.cwd() + '/public/admin'))
app.use('/public', express.static(__dirname + '/public'))
//app.use(favicon(__dirname + '/public/assets/img/favicon.ico'))
app.use(session({ secret: 'surat-izin-2018', cookie: { maxAge: 3600000 } })) //3600000

app.use((req, res, next) => {
  res.locals.userSession = req.session.user
  next()
})

app.use('/', require('./routes/index'))
app.use('/login', require('./routes/login'))
app.use('/activation', require('./routes/activation'))
app.use('/forgot', require('./routes/forgot'))
app.use('/reset', require('./routes/reset'))

app.use('/admin/login', require('./routes/admin/login'))
app.use('/admin/logout', require('./routes/admin/logout'))
app.use('/admin/forgot', require('./routes/admin/forgot'))
app.use('/admin/reset', require('./routes/admin/reset'))

app.use('/user', authSession.checkSession, require('./routes/user'))
app.use('/admin', authSession.checkSession, require('./routes/admin/index'))

app.listen(port, () => console.log(`Sundul gan on http://localhost:${port} !!`))
