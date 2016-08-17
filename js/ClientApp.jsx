const React = require('react')
const ReactDOM = require('react-dom')

// Router
const ReactRouter = require('react-router')
// const {Router, Route, hashHistory} = ReactRouter
// is equivelent to
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const hashHistory = ReactRouter.hashHistory
const IndexRoute = ReactRouter.IndexRoute

// data
const { shows } = require('../public/data')

// Components
const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')

console.log(shows)

// implicit return using ( ) instead of { return (...)}
// note can have local variables using this syntax
const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
    // checks if id existed
    if (showArray < 1) {
      return replace('/')
    }
    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
