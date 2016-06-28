'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDTopNav = require('./MDTopNav.css');

var _MDTopNav2 = _interopRequireDefault(_MDTopNav);

var _logo = require('./logo.png');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zip = function zip(rows) {
  return rows[0].map(function (_, c) {
    return rows.map(function (row) {
      return row[c];
    });
  });
};

var MDTopNav = function MDTopNav(props) {
  var items = props.items;
  var urls = props.urls;

  if (items.length !== urls.length) {
    return _react2.default.createElement(
      'div',
      null,
      'items and urls don\'t match'
    );
  }
  return _react2.default.createElement(
    'div',
    { className: _MDTopNav2.default.container },
    _react2.default.createElement(
      'div',
      { className: _MDTopNav2.default.list },
      _react2.default.createElement('img', { className: _MDTopNav2.default.logo, src: _logo2.default }),
      _react2.default.createElement(
        'div',
        { className: _MDTopNav2.default.items },
        zip([items, urls]).map(function (tuple) {
          var _tuple = _slicedToArray(tuple, 2);

          var item = _tuple[0];
          var url = _tuple[1];

          return _react2.default.createElement(
            'div',
            { className: _MDTopNav2.default.item },
            _react2.default.createElement(
              'a',
              { className: _MDTopNav2.default.link, href: url },
              item
            )
          );
        })
      )
    )
  );
};

MDTopNav.propsTypes = {
  logo: _react.PropTypes.String,
  items: _react.PropTypes.arrayOf(_react.PropTypes.String),
  urls: _react.PropTypes.arrayOf(_react.PropTypes.String)
};

exports.default = MDTopNav;