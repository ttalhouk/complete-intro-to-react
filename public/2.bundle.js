webpackJsonp([2],{

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ShowCard = __webpack_require__(248);
	var Header = __webpack_require__(249);

	var _require = __webpack_require__(225);

	var connector = _require.connector;
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

	var _React$PropTypes = React.PropTypes;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var arrayOf = _React$PropTypes.arrayOf;


	var Search = React.createClass({
	  displayName: 'Search',


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
	    searchTerm: string,
	    shows: arrayOf(object)
	  },
	  render: function render() {
	    var _this = this;

	    return React.createElement(
	      'div',
	      { className: 'container' },
	      React.createElement(Header, { showSearch: true }),
	      React.createElement(
	        'div',
	        { className: 'shows' },
	        this.props.shows.filter(function (show) {
	          return (show.title + ' ' + show.description).toUpperCase().indexOf(_this.props.searchTerm.toUpperCase()) >= 0;
	        }).map(function (show) {
	          return React.createElement(ShowCard, _extends({}, show, { key: show.imdbID }));
	        })
	      )
	    );
	  }
	});

	module.exports = connector(Search);

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162);

	var Link = _require.Link;


	var ShowCard = function ShowCard(props) {
	  return React.createElement(
	    Link,
	    { to: '/details/' + props.imdbID },
	    React.createElement(
	      'div',
	      { className: 'show-card' },
	      React.createElement('img', { src: 'public/img/posters/' + props.poster, className: 'show-card-img' }),
	      React.createElement(
	        'div',
	        { className: 'show-card-text' },
	        React.createElement(
	          'h3',
	          { className: 'show-card-title' },
	          props.title
	        ),
	        React.createElement(
	          'h4',
	          { className: 'show-card-year' },
	          '(',
	          props.year,
	          ')'
	        ),
	        React.createElement(
	          'p',
	          { className: 'show-card-description' },
	          props.description
	        )
	      )
	    )
	  );
	};

	var string = React.PropTypes.string;


	ShowCard.propTypes = {
	  title: string.isRequired,
	  description: string.isRequired,
	  year: string.isRequired,
	  poster: string.isRequired,
	  imdbID: string.isRequired
	};

	module.exports = ShowCard;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162);

	var Link = _require.Link;
	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var bool = _React$PropTypes.bool;
	var string = _React$PropTypes.string;

	var _require2 = __webpack_require__(225);

	var connector = _require2.connector;


	var Header = React.createClass({
	  displayName: 'Header',

	  propTypes: {
	    setSearchTerm: func,
	    searchTerm: string,
	    showSearch: bool
	  },
	  handleSearchTermEvent: function handleSearchTermEvent(event) {
	    this.props.setSearchTerm(event.target.value);
	  },
	  render: function render() {
	    var utilSpace = void 0;
	    if (this.props.showSearch) {
	      utilSpace = React.createElement('input', { value: this.props.searchTerm, type: 'text', className: 'search-input', placeholder: 'Search', onChange: this.handleSearchTermEvent });
	    } else {
	      utilSpace = React.createElement(
	        'h2',
	        { className: 'header-back' },
	        React.createElement(
	          Link,
	          { to: '/search' },
	          'Back'
	        )
	      );
	    }
	    return React.createElement(
	      'header',
	      { className: 'header' },
	      React.createElement(
	        'h1',
	        { className: 'brand' },
	        React.createElement(
	          Link,
	          { to: '/', className: 'brand-link' },
	          'Video App'
	        )
	      ),
	      utilSpace
	    );
	  }
	});

	module.exports = connector(Header);

/***/ }

});