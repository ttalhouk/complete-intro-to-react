const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

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

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'default search term'
    }
  },
  handleSearchTermEvent (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='container'>
        <header className="header">
          <h1 className="brand">Video App {this.state.searchTerm}</h1>
          <input value={this.state.searchTerm} type="text" className="search-input" placeholder="Search" onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
