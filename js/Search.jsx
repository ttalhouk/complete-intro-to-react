const React = require('react')
const ShowCard = require('./ShowCard')

// being passed as props.route from ClientApp
// 'const data = require('../public/data')'

// convert from stateless
// const Search = () => (
//   <div className='container'>
//     <header className="header">
//       <h1 className="brand">Video App</h1>
//       <input type="text" className="search-input" placeholder="Search" />
//     </header>
//     <div className='shows'>
//       {data.shows.map((show) => (
//         <ShowCard {...show} key={show.imdbID} />
//       ))}
//     </div>
//   </div>
// )

// ES6 Syntax for State Components
// class Search extends React.Component {

const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  propTypes: {
    route: object
  },
  render () {
    return (
      <div className='container'>
        <header className="header">
          <h1 className="brand">Video App</h1>
          <input value={this.state.searchTerm} type="text" className="search-input" placeholder="Search" onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {console.log(this.props.route.shows)}
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
