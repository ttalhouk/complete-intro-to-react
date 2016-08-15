// /* globals React ReactDOM*/
// for standard
var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

// stateless component
var MyFirstComponent = function () {
  return (
    <div>
      <MyTitle title="Whatevs" color="rebeccapurple" />
      <MyTitle title="LOL" color="papayawhip" />
      <MyTitle title="OMGLOLWTFBBQ" color="#f06d06" />
    </div>
  )
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))

// note semicolons are mising because using standard to add them
