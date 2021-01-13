"use strict";

const net = require("net");
const { connect } = require("./client");

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Create a function handleUserInput and
// register it as the "data" callback handler for stdin.

const handleUserInput = function (keyPress) {};

setupInput();
