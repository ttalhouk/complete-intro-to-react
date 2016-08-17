require('babel-register')
require('babel-polyfill')

// Creating a browser environment
global.document = require('jsdom').jsdom('<body><div class=app></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
