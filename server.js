require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');
const moment = require('moment');
const helmet = require('helmet');
const PORT = process.env.PORT || 3333;
const app = express();
const db = require('./models');
const sequelize = require('./config/config');
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess))

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

if (app.get('env') !== 'test') {
  app.use(morgan('dev')); // Hook up the HTTP logger
}

app.use(express.static('public'));

// PSEUDO Code
// Issue is the parameters that you're passing into your passport integration attempt
// I suggest either going through documentation or the examples provided in class
// right now when you are passing "db" through the method below you are trying to invoke
// the sequelize method on the passport.js file on a parameter that does not have context for 
// the connection established in your config file. In addition to that
// your .env file should be looked at just so that you can make sure that
// all env properties match properly. You were missing the DB_NAME .env property 
// earlier which is used to establish a proper connection to your db

// As an aside, considering the time constraints I recommend having a dedicated team working 
// specifically on functionality given that the only purpose of passport
// is to have the logged in user verified, you can still get that context
// with sessionStorage for testing until you get your passport integration sorted out
// prioritize the pitch functionality of your app, so that you can present it to class
// and the technical portion is not even a selling point anyway. Have a good presentation
// ready.

// require('./controllers/passport')(db, app, passport); // pass passport for configuration

// Define our routes
app.use('/api', require('./routes/apiRoutes')(passport, db));
app.use(require('./routes/htmlRoutes')(db));

// Secure express app
app.use(helmet.hsts({
  maxAge: moment.duration(1, 'years').asMilliseconds()
}));

// catch 404 and forward to error handler
if (app.get('env') !== 'development') {
  app.use((req, res, next) => {
    const err = new Error('Not Found: ' + req.url);
    err.status = 404;
    next(err);
  });
}

// const syncOptions = {
//   force: process.env.FORCE_SYNC === 'true'
// };

// if (app.get('env') === 'test') {
//   syncOptions.force = true;
// }

// db.sequelize.sync(syncOptions).then(() => {
//   if (app.get('env') !== 'test' && syncOptions.force) {

//     require('./seeds/seed')(db);
//     setTimeout(() => {
//       require('./seeds/data')(db);
//     }, 2000);

//     setTimeout(() => {
//       require('./seeds/tripData')(db);
//     }, 3000);
//     setTimeout(() => {
//       require('./seeds/recommendation')(db);
//     }, 4000);
//     setTimeout(() => {
//       require('./seeds/picture')(db);
//     }, 5000);
//   }

//   app.listen(PORT, () => {
//     console.log(`App listening on port: ${PORT}`);
//   });
// });
console.log(db.sequelize)
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser'));
});


module.exports = app;
