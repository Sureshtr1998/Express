const path = require("path");

function getMessages(req, res) {
  path.join(__dirname, "..", "public", "desktop.png");
  res.render("messages", {
    friend: "Friend 1",
  });
  //   res.sendFile(path.join(__dirname, "..", "public", "images", "desktop.png"));
  //   res.send("<ul><li>Hello </li></ul>");
}

function postMessage(req, res) {
  console.log("Posted message");
}

module.exports = {
  getMessages,
  postMessage,
};
