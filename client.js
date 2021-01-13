"use strict";

// client.js

const net = require("net");
const { IP, PORT, NAME } = require("./constants");
const stdin = process.stdin;

// Establishes connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  stdin.setEncoding("utf8");

  conn.on("connect", () => {
    console.log(`Successfully connected to game server.`);
    console.log(`Your name is ${NAME}.`);
    conn.write(`Name: AR`);
  });

  // const up =
  // const down = () => conn.write("Move: down");
  // const left = () => conn.write("Move: left");
  // const right = () => conn.write("Move: right");

  return conn;
};

module.exports = {
  connect,
};
