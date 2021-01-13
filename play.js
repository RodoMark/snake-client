"use strict";

const net = require("net");
const { connect } = require("./client");
const { Game } = require("./snek-multiplayer/src/Game");
const { setupInput } = require("./input");

console.log("Connecting ...");
// connect();

setupInput(connect());
