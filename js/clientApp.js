
// DOM components
var div = React.DOM.div
var h1 = React.DOM.h1
// Custom components

var MyTitle = React.createClass({
  // render: function (){} alternative ES6 syntax
  render (){
    return(
      div(null,
        h1({style: {color:this.props.color}}, this.props.title || 'this is my custom component')
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var ce = React.createElement

var myFirstComponent = (
  div(null,
    React.createElement(MyTitle,null),
    // h1(null, 'this is my first component')
    React.createElement(MyTitle,{title:'props are great', color:"rebeccapurple"}),
    // using the factory is equivelent
    MyTitleFactory({title: 'use props everywhere', color:"red"}),
    // or
    ce(MyTitle, {title: 'props are the best', color:"green"})
  )
)

ReactDOM.render(myFirstComponent, document.getElementById('app'))

// note semicolons are mising because using standard to add them
