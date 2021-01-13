"use strict";

const IP = "localhost";
const PORT = 50541;

const args = process.argv.slice(2);
const NAME = args.join("").split("").slice(0, 3).join("");

const MOVE = {
  up: "Move: up",
  down: "Move: down",
  left: "Move: left",
  right: "Move: right",
};

const PHRASES = {
  phrase1: "Say: I'm a snake!",
  phrase2: "Say: Slitherin'...",
  phrase3: "Say: Sss",
  phrase4: "Say: Hey!",
};

module.exports = {
  IP,
  PORT,
  NAME,
  MOVE,
  PHRASES,
};
