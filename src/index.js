#!/usr/bin/env node
'use strict';

import path from 'node:path';
import { exit } from 'node:process';
import env from 'dotenv';
import ora from 'ora';

import loader from './loader/index.mjs';
import Abbr from './abbr.mjs';
import wwc from './wwc.mjs';

const option = env.config({
  path: path.join(process.env.HOME, './.whatwecall'),
}).parsed;

console.log('🦄 Welcome to What-We-Call');
const spinner = ora({
  discardStdin: false,
  text: 'Loading Abbr!',
}).start();

let data;

try {
  data = await loader(option);
  spinner.succeed(`Loading Abbr from ${option.loader}:${option[option.loader]} success!`);
} catch (err) {
  spinner.fail('Loading Abbr error!');
  exit();
}

wwc(new Abbr(data, option.case_ignore))();
