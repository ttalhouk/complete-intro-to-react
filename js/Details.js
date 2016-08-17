const React = require('react')

// using es6 class
class Details extends React.Component {
  render () {
    return (
      <div style={{textAlign: 'left'}} className="container">
        <pre><code>
          {JSON.stringify(this.props.params, null, 4)}
        </code></pre>
      </div>
    )
  }
}
module.exports = Details
