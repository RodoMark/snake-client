// Store the active TCP connection object
let connection;
let { MOVE, PHRASES } = require("./constants");

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  switch (key) {
    case "\u0003":
      process.exit();
      break;
    case "w":
      connection.write(MOVE.up);
      break;
    case "s":
      connection.write(MOVE.down);
      break;
    case "a":
      connection.write(MOVE.left);
      break;
    case "d":
      connection.write(MOVE.right);
      break;
    case "p":
      connection.write(PHRASES.phrase4);
      break;
    case "o":
      connection.write(PHRASES.phrase3);
      break;
    case "i":
      connection.write(PHRASES.phrase2);
      break;
    case "u":
      connection.write(PHRASES.phrase1);
      break;
  }
};

module.exports = {
  handleUserInput,
  setupInput,
};
