#!/usr/bin/env node
"use strict";

import path from "node:path";
import { exit } from "node:process";
import env from "dotenv";
import ora from "ora";
import minimist from "minimist";

import loader from "./loader/index.mjs";
import Abbr from "./abbr.mjs";
import wwc from "./wwc.mjs";

const option = Object.assign(
  {},
  // dot file
  env.config({
    path: path.join(process.env.HOME, "./.whatwecall")
  }).parsed,
  // tty options
  minimist(process.argv.slice(2), {
    alias: {
      topic: "t"
    }
  })
);

console.log(" 🔎 Welcome to What-We-Call");

const spinner = ora({
  discardStdin: false,
  text: "Loading Abbr!"
}).start();

let data;

try {
  data = await loader(option);
  spinner.succeed(
    `Loading Abbr from ${option.loader}:${
      option[option.loader]
    }${option.topic && `, topic: ${option.topic} `}success!`
  );
} catch (err) {
  spinner.fail("Loading Abbr error!");
  exit();
}

wwc(new Abbr(data, option))();
