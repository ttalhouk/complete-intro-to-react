const React = require('react')
const Header = require('./Header')
// using axios for ajax requests
const axios = require('axios')
const { connector } = require('./Store')

// using es6 class
class Details extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.params.id}`).then((res) => {
      this.setState({omdbData: res.data})
    }).catch((error) => {
      console.error('axios error', error)
    })
  }
  assignShow (id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)

    return showArray[0]
  }
  render () {
    const { title, year, description, poster, trailer } = this.assignShow(this.props.params.id)
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className="video-rating">{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div className="container">
        <Header />
        <div className="video-info">
          <h1 className="video-title">{title}</h1>
          <h2 className="video-year">({year})</h2>
          {rating}
          <img className="video-poster" src={`/public/img/posters/${poster}`} />
          <p className="video-description">{description}</p>
        </div>
        <div className="video-container">
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen></iframe>
        </div>
      </div>
    )
  }
}
const { arrayOf, object } = React.PropTypes
Details.propTypes = {
  params: object,
  shows: arrayOf(object).isRequired
}
module.exports = connector(Details)
