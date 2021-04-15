// we could slice like this, but we can also use a lib minimist
// console.log(process.argv.slice(2,3))
const parseArgs = require('minimist')
const colors = require('colors')
const fs = require('fs')
const handleCommand = require('./handleCommand')

const command = parseArgs(process.argv.slice(2,3))
delete command._
handleCommand(command)