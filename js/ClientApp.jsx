const React = require('react')
const Layout = require('./Layout')

// --------  Delay require ------------
// const Landing = require('./Landing')
// const Search = require('./Search')
// const Details = require('./Details')

const { Router, browserHistory } = require('react-router')
const { store } = require('./Store')
const { Provider } = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')  // shim for node js
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponent (location, cb) {
      require.ensure([], () => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Search'))
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}
const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

// -------------- Component Routing ---------------
// const myRoutes = () => (
//   <Route path='/' component={Layout}>
//     <IndexRoute component={Landing} />
//     <Route path='/search' component={Search} />
//     <Route path='/details/:id' component={Details} />
//   </Route>
// // )
//
// const App = React.createClass({
//   render () {
//     return (
//       <Provider store={store}>
//         <Router history={browserHistory}>
//           {myRoutes()}
//         </Router>
//       </Provider>
//     )
//   }
// })

// App.Routes = myRoutes
App.Routes = rootRoute
App.History = browserHistory

module.exports = App
