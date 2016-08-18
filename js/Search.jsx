const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { connector } = require('./Store')
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

const { object, string } = React.PropTypes

const Search = React.createClass({

  // handle with store...
  // getInitialState () {
  //   return {
  //     searchTerm: ''
  //   }
  // },

  // no longer handling state of this
  // handleSearchTermChange (searchTerm) {
  //   this.setState({searchTerm: searchTerm})
  // },
  // for Header
  // Original Code
  //        <Header
  //           handleSearchTermChange={this.handleSearchTermChange}
  //           searchTerm={this.state.searchTerm}
  //           showSearch />
  // {this.props.route.shows
  // .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
  // .map((show) => (
  //   <ShowCard {...show} key={show.imdbID} />
  // ))}

  propTypes: {
    route: object,
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = connector(Search)
