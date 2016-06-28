'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MDTopNav = require('./MDTopNav.css');

var _MDTopNav2 = _interopRequireDefault(_MDTopNav);

var _logo = require('./logo.png');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zip = function zip(rows) {
  return rows[0].map(function (_, c) {
    return rows.map(function (row) {
      return row[c];
    });
  });
};

var MDTopNav = function (_Component) {
  _inherits(MDTopNav, _Component);

  function MDTopNav() {
    _classCallCheck(this, MDTopNav);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MDTopNav).call(this));
  }

  _createClass(MDTopNav, [{
    key: 'getLogo',
    value: function getLogo() {
      var logo = this.props.logo;

      return !!logo ? _react2.default.createElement('img', { className: _MDTopNav2.default.logo, src: logo }) : _react2.default.createElement('img', { className: _MDTopNav2.default.logo, src: _logo2.default });
    }
  }, {
    key: 'getItems',
    value: function getItems() {
      var _props = this.props;
      var items = _props.items;
      var urls = _props.urls;


      if (!items) {
        return null;
      } else if (!urls) {
        return _react2.default.createElement(
          'div',
          { className: _MDTopNav2.default.items },
          items.map(function (item, i) {
            return _react2.default.createElement('div', { className: _MDTopNav2.default.item, key: i });
          })
        );
      } else if (items.length !== urls.length) {
        return _react2.default.createElement(
          'div',
          null,
          'items and urls don\'t match'
        );
      }
      return _react2.default.createElement(
        'div',
        { className: _MDTopNav2.default.items },
        zip([items, urls]).map(function (tuple, i) {
          var _tuple = _slicedToArray(tuple, 2);

          var item = _tuple[0];
          var url = _tuple[1];

          return _react2.default.createElement(
            'div',
            { className: _MDTopNav2.default.item, key: i },
            _react2.default.createElement(
              'a',
              { className: _MDTopNav2.default.link, href: url },
              item
            )
          );
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var logoJSX = this.getLogo();
      var itemsJSX = this.getItems();
      return _react2.default.createElement(
        'div',
        { className: _MDTopNav2.default.container },
        _react2.default.createElement(
          'div',
          { className: _MDTopNav2.default.list },
          logoJSX,
          itemsJSX
        )
      );
    }
  }]);

  return MDTopNav;
}(_react.Component);

MDTopNav.propsTypes = {
  logo: _react.PropTypes.String,
  items: _react.PropTypes.arrayOf(_react.PropTypes.String),
  urls: _react.PropTypes.arrayOf(_react.PropTypes.String)
};

exports.default = MDTopNav;