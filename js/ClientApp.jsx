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

// Components
const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')

// implicit return using ( ) instead of { return (...)}
// note can have local variables using this syntax
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
