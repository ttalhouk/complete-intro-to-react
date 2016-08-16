const React = require('react')
const ReactDOM = require('react-dom')


// implicit return using ( ) instead of { return (...)}
// note can have local variables using this syntax

const App = () => (
  <div className="app-container">
    <div className="home-info">
      <h1 className="title">Video App</h1>
      <input className="search" type='text' placeholder='Search' />
      <button className='browse-all' >or Browse All</button>
    </div>


  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
