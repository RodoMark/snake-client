"use strict";

// client.js

const net = require("net");
const stdin = process.stdin;

// Establishes connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  stdin.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server.`);
    console.log(`Your name is AR.`);
    conn.write(`Name: AR`);
  });

  conn.on("data", (input) => {
    if (input === "U+0077") conn.write("Move: up");
  });
  // const up = () => conn.write("Move: up");
  // const down = () => conn.write("Move: down");
  // const left = () => conn.write("Move: left");
  // const right = () => conn.write("Move: right");

  return conn;
};

module.exports = {
  connect,
};
