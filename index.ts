#!/usr/bin/env node
const args = process.argv;

if(args.indexOf('-t') > 0 || args.indexOf('--test') > 0) require('./tests/test1');