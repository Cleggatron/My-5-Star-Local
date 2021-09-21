const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const morgan = require("morgan");
// npm packages imported

//connection file
const sequelize = require("./config/connection");

//util functions
const helpers = require("./util/helpers");
const logger = require("./util/logger");

//routing 
const routes = require("./controllers");


const app = express();
const PORT = process.env.PORT || 3001;

// set up or sessions
const sess = {
  secret: "Project2 secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));


//custom token to track user id.
morgan.token("id", function (req, res) {
  if(req.session.hasOwnProperty("logged_in")){
    return ("userId: " + req.session.user_id)
  }
  else{
    return "userId: -"
  }
})

//set up middleware for logging the http requests
const morganMiddleware = morgan(":id :date :method :status :url", {
  stream: {
    write: (msg) => logger.http(msg)
  }
})


const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morganMiddleware);

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening`));
});
