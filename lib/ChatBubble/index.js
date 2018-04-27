"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var defaultBubbleStyles = {
    userBubble: {},
    chatbubble: {},
    text: {}
};

var ChatBubble = function (_React$Component) {
    _inherits(ChatBubble, _React$Component);

    function ChatBubble(props) {
        _classCallCheck(this, ChatBubble);

        return _possibleConstructorReturn(this, (ChatBubble.__proto__ || Object.getPrototypeOf(ChatBubble)).call(this, props));
    }

    _createClass(ChatBubble, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                bubblesCentered = _props.bubblesCentered,
                parser = _props.parser;
            var bubbleStyles = this.props.bubbleStyles;

            bubbleStyles = bubbleStyles || defaultBubbleStyles;
            var _bubbleStyles = bubbleStyles,
                userBubble = _bubbleStyles.userBubble,
                chatbubble = _bubbleStyles.chatbubble,
                text = _bubbleStyles.text;

            var readStatus = this.props.message.id === 0 && this.props.message.isRead && React.createElement("svg", { style: { float: 'right', display: 'inline-block', position: 'absolute', bottom: 0, right: 0 }, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 50 50", width: "15", height: "15" }, React.createElement("g", { id: "surface1_4_" }, React.createElement("path", { fill: "#CCFF90", d: "M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" })));
            var chatBubbleStyles = this.props.message.id === 0 ? Object.assign({}, styles_1.default.chatbubble, bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal, chatbubble, userBubble, this.props.message.styles && this.props.message.styles.bubbleStyles ? this.props.message.styles.bubbleStyles : {}) : Object.assign({}, styles_1.default.chatbubble, styles_1.default.recipientChatbubble, bubblesCentered ? {} : styles_1.default.recipientChatbubbleOrientationNormal, userBubble, chatbubble, this.props.message.styles && this.props.message.styles.bubbleStyles ? this.props.message.styles.bubbleStyles : {});
            return React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper) }, this.props.message.type == "text" && React.createElement("div", { style: chatBubbleStyles }, React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, parser ? parser(this.props.message.message) : this.props.message.message), readStatus), this.props.message.type === "image" && React.createElement("div", { style: chatBubbleStyles }, React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, React.createElement("img", { src: this.props.message.message, style: { maxHeight: '100px' } })), readStatus), this.props.message.type === "file" && React.createElement("div", { style: chatBubbleStyles }, React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, React.createElement("a", { href: this.props.message.message, download: this.props.message.metaData.name || 'ChatFile' }, this.props.message.metaData.thumbnail && React.createElement("img", { style: { maxWidth: '50px', height: 'auto' }, src: this.props.message.metaData.thumbnail }), this.props.message.metaData.fileType && React.createElement("h4", { style: { textAlign: 'center' } }, " ", "Download " + (this.props.message.metaData.name || 'file') + " " + this.props.message.metaData.fileType, " "))), readStatus));
        }
    }]);

    return ChatBubble;
}(React.Component);

exports.default = ChatBubble;
//# sourceMappingURL=index.js.map