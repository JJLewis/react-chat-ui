"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const defaultBubbleStyles = {
    userBubble: {},
    chatbubble: {},
    text: {},
};
class ChatBubble extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { bubblesCentered } = this.props;
        let { bubbleStyles } = this.props;
        bubbleStyles = bubbleStyles || defaultBubbleStyles;
        const { userBubble, chatbubble, text } = bubbleStyles;
        const chatBubbleStyles = this.props.message.id === 0
            ? Object.assign({}, styles_1.default.chatbubble, bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal, chatbubble, userBubble) : Object.assign({}, styles_1.default.chatbubble, styles_1.default.recipientChatbubble, bubblesCentered
            ? {}
            : styles_1.default.recipientChatbubbleOrientationNormal, userBubble, chatbubble);
        return (React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper) },
            React.createElement("div", { style: chatBubbleStyles },
                React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, this.props.message.message))));
    }
}
exports.default = ChatBubble;
//# sourceMappingURL=index.js.map