webpackJsonp([1],{

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162);

	var browserHistory = _require.browserHistory;

	var _require2 = __webpack_require__(162);

	var Link = _require2.Link;

	var _require3 = __webpack_require__(225);

	var connector = _require3.connector;

	// implicit return using ( ) instead of { return (...)}
	// note can have local variables using this syntax

	// Update landing page to use redux to store state
	// -------- Original code (Stateless)------------------
	// const Landing = () => (
	//   <div className="home-info">
	//     <h1 className="title">Video App</h1>
	//     <input className="search" type='text' placeholder='Search' />
	//     <Link to='/search' className='browse-all' >or Browse All</Link>
	//   </div>
	// )

	// Stateful component

	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);

	  function Landing(props) {
	    _classCallCheck(this, Landing);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Landing).call(this, props));

	    _this.handleSearchTermEvent = _this.handleSearchTermEvent.bind(_this);
	    _this.goToSearch = _this.goToSearch.bind(_this);
	    return _this;
	  }

	  _createClass(Landing, [{
	    key: 'goToSearch',
	    value: function goToSearch(event) {
	      browserHistory.push('search');
	      event.preventDefault();
	    }
	  }, {
	    key: 'handleSearchTermEvent',
	    value: function handleSearchTermEvent(event) {
	      this.props.setSearchTerm(event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'div',
	        { className: 'home-info' },
	        React.createElement(
	          'h1',
	          { className: 'title' },
	          'Video App'
	        ),
	        React.createElement(
	          'form',
	          { onSubmit: this.goToSearch },
	          React.createElement('input', { value: this.props.searchTerm, onChange: this.handleSearchTermEvent, className: 'search', type: 'text', placeholder: 'Search' })
	        ),
	        React.createElement(
	          Link,
	          { to: '/search', className: 'browse-all' },
	          'or Browse All'
	        )
	      );
	    }
	  }]);

	  return Landing;
	}(React.Component);

	var _React$PropTypes = React.PropTypes;
	var func = _React$PropTypes.func;
	var string = _React$PropTypes.string;


	Landing.propTypes = {
	  setSearchTerm: func,
	  searchTerm: string
	};

	module.exports = connector(Landing);

/***/ }

});