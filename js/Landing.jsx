const React = require('react')
const {Link} = require('react-router')

// implicit return using ( ) instead of { return (...)}
// note can have local variables using this syntax

const Landing = () => (
  <div className="app-container">
    <div className="home-info">
      <h1 className="title">Video App</h1>
      <input className="search" type='text' placeholder='Search' />
      <Link to='/search' className='browse-all' >or Browse All</Link>
    </div>
  </div>
)

module.exports = Landing
