var React = require('react')
// takes react out of global

// DOM components
var div = React.DOM.div
var h1 = React.DOM.h1
// Custom components

var MyTitle = React.createClass({
  // render: function (){} alternative ES6 syntax
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title || 'this is my custom component')
      )
    )
  }
})

module.exports = MyTitle
