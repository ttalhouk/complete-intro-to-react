const redux = require('redux')
const reactRedux = require('react-redux')
const { shows } = require('../public/data')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: '',
  shows: shows
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      // const newState = {}
      // Object.assign(newState, state, {searchTerm: action.value})
      // return newState

      return reduceSearchTerm(state, action)
    default:
      return state
  }
}

const reduceSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

// for production use
// const store = redux.createStore(rootReducer)

// to enable devtools and middlewares
const store = redux.createStore(rootReducer, initialState, redux.compose(
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

const mapStateToProps = (state) => ({
  searchTerm: state.searchTerm,
  shows: state.shows
})

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (searchTerm) => {
      dispatch({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store, rootReducer }
