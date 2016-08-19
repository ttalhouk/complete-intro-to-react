const React = require('react')
// const ReactDOM = require('react-dom')

// Router
const ReactRouter = require('react-router')
// const {Router, Route, hashHistory} = ReactRouter
// is equivelent to
const Router = ReactRouter.Router
const Route = ReactRouter.Route
const hashHistory = ReactRouter.hashHistory
const IndexRoute = ReactRouter.IndexRoute

// data
// const { shows } = require('../public/data')
// Moved to store

// Components
const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')
const { store } = require('./Store')

// Redux

const { Provider } = require('react-redux')
// makes store available where needed

// implicit return using ( ) instead of { return (...)}
// note can have local variables using this syntax
const App = React.createClass({
  // Store now handles state
  // assignShow (nextState, replace) {
  //   const showArray = this.props.shows.filter((show) => show.imdbID === nextState.params.id)
  //   // checks if id existed else runs replace route
  //   if (showArray < 1) {
  //     return replace('/')
  //   }
  //   Object.assign(nextState.params, showArray[0])
  //   return nextState
  // },
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout} >
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})

module.exports = App
