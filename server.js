const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3333;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};



app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var home = require('./controllers/homeRoutes');
var book = require('./controllers/api/bookingInfoRoutes.js');
var users = require('./controllers/api/userRoutes.js');

app.use("/", home);
app.use("/booking", book);
app.use("/user", users)
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Listening on port %s. Visit http://localhost:%s/ in your browser'));
});
