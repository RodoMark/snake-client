// Store the active TCP connection object
let connection;

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
      connection.write("Move: up");
      break;
    case "s":
      connection.write("Move: down");
      break;
    case "a":
      connection.write("Move: left");
      break;
    case "d":
      connection.write("Move: right");
      break;
    case "p":
      connection.write("Say: I'm a snake!");
      break;
    case "o":
      connection.write("Say: Slitherin'...");
      break;
    case "i":
      connection.write("Say: Sss");
      break;
    case "u":
      connection.write("Say: Hey!");
      break;
  }
};

module.exports = {
  handleUserInput,
  setupInput,
};
