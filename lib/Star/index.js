"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var defaultStarStyles = {
    color: '#000000',
    size: 24
};

var Star = function (_React$Component) {
    _inherits(Star, _React$Component);

    function Star(props) {
        _classCallCheck(this, Star);

        return _possibleConstructorReturn(this, (Star.__proto__ || Object.getPrototypeOf(Star)).call(this, props));
    }

    _createClass(Star, [{
        key: "render",
        value: function render() {
            var style = this.props.style;

            style = style || defaultStarStyles;
            var starred = this.props.starred || false;
            var starFull = React.createElement("svg", { fill: style.color, height: style.size, width: style.size, xmlns: "http://www.w3.org/2000/svg" }, React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }), React.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }), React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
            var starBorder = React.createElement("svg", { fill: style.color, height: style.size, width: style.size, xmlns: "http://www.w3.org/2000/svg" }, React.createElement("path", { d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" }), React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
            return React.createElement("div", { style: { float: this.props.isUser ? 'right' : 'left' }, onClick: this.props.toggleStarred }, starred ? starFull : starBorder);
        }
    }]);

    return Star;
}(React.Component);

exports.default = Star;
//# sourceMappingURL=index.js.map