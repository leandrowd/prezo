'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsiveCarousel = require('react-responsive-carousel');

require('react-responsive-carousel/lib/styles/carousel.min.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prezo = function (_Component) {
    _inherits(Prezo, _Component);

    function Prezo() {
        _classCallCheck(this, Prezo);

        return _possibleConstructorReturn(this, (Prezo.__proto__ || Object.getPrototypeOf(Prezo)).apply(this, arguments));
    }

    _createClass(Prezo, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.useDefaultStyles) {
                require('./Prezo.scss');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var showArrows = _props.showArrows;
            var showIndicators = _props.showIndicators;
            var showPositionXofTotal = _props.showPositionXofTotal;
            var className = _props.className;


            var carouselProps = {
                showArrows: showArrows,
                showIndicators: showIndicators,
                showStatus: showPositionXofTotal,
                className: 'Prezo ' + className
            };

            return _react2.default.createElement(
                _reactResponsiveCarousel.Carousel,
                _extends({ showThumbs: false, useKeyboardArrows: true }, carouselProps),
                this.props.children
            );
        }
    }]);

    return Prezo;
}(_react.Component);

Prezo.propTypes = {
    showArrows: _react.PropTypes.bool,
    showIndicators: _react.PropTypes.bool,
    showPositionXofTotal: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    useDefaultStyles: _react.PropTypes.bool
};
Prezo.defaultProps = {
    showArrows: true,
    showIndicators: true,
    showPositionXofTotal: false,
    useDefaultStyles: true,
    className: ''
};
exports.default = Prezo;
;