const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const db = require('./models/db');
const models = require('./models/index').modelos;
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('../front/dist'));

passport.serializeUser(function (user, done) {
  console.log('serialize', user.id)
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  models.User.findById(id)
    .then((user) => {
      done(null, user);
    }).catch(err => done(err));
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (username, password, done) {
      models.User.findOne({ where: { email: username } }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        var salt = user.salt;
        if (!user.checkPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        console.log('user', user)
        return done(null, user);
      });
    },
  ),
);

db.sync({ force: false }).then(function () {
  app.listen('3001', function () {
    console.log('listening at 3001');
  });
});

app.post('/api/login', passport.authenticate('local'), function (req, res) {
  res.send(req.user);
});

app.post('/api/logout', (req, res) => {
  req.logout();
  console.log('DESloggeado correctamente');
  return res.send(req.user);
});

app.use('/api', require('./routes/index'));


app.get('/*', function (req, res) {
  res.sendFile(path.resolve('../front/index.html'));
});
