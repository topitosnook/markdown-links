#!/usr/bin/env node
const { getDataFromConsole } = require('./readFromConsole');
const { mdLinks } = require('./mdLinks');

const data = getDataFromConsole();
// console.log(data);
mdLinks(data[0], data[1]);
