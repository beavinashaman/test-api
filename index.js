const express = require("express");
const app = express();
app.use(express.json())

const cors = require("cors")
app.use(cors());

const db = require("./models");

//Routers
//Post
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);
//Comment
const commentstRouter = require('./routes/Comments');
app.use("/comments", commentstRouter);
//Login
const userstRouter = require('./routes/Users');
app.use("/auth", userstRouter);

db.sequelize
  // .sync({force: true})
  .sync()
  .then(() => {
    app.listen(8080, () => {
      console.log("Server is up!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
