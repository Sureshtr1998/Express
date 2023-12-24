const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");
const rootRouter = require("./routes/root.router");

const app = express();

//for dynamic templates, we use hbs, for static we use express.static, whenever we use res.render it is going to look inside views folder.
//By default it will look into layout.hbs file at first, it is to set a static layout template
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

//always use absolute path because when we execute node from different folder then relative path wont work
app.use("/site", express.static(path.join(__dirname, "public")));
//by default it will take chech the content type if it is application/json then it will parse
app.use(express.json());

//Below is using hbs
app.use("/", rootRouter);

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
