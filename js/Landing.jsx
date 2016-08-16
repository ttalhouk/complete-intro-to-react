const React = require('react')

// implicit return using ( ) instead of { return (...)}
// note can have local variables using this syntax

const Landing = () => (
  <div className="app-container">
    <div className="home-info">
      <h1 className="title">Video App</h1>
      <input className="search" type='text' placeholder='Search' />
      <button className='browse-all' >or Browse All</button>
    </div>
  </div>
)

module.exports = Landing
