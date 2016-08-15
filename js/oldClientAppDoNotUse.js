// /* globals React ReactDOM*/
// for standard
var React = require('react')
var ReactDOM = require('react-dom')
// takes react and react-dom out of global

// DOM components
var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)

var ce = React.createElement

var myFirstComponent = (
  div(null,
    React.createElement(MyTitle, null),
    // h1(null, 'this is my first component')
    React.createElement(MyTitle, {title: 'props are great', color: 'rebeccapurple'}),
    // using the factory is equivelent
    MyTitleFactory({title: 'use props everywhere', color: 'red'}),
    // or
    ce(MyTitle, {title: 'props are the best', color: 'green'})
  )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))

// note semicolons are mising because using standard to add them
