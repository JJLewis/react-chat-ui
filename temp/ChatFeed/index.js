"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const BubbleGroup_1 = require("../BubbleGroup");
const ChatBubble_1 = require("../ChatBubble");
const ChatInput_1 = require("../ChatInput");
const Message_1 = require("../Message");
const styles_1 = require("./styles");
class ChatFeed extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom() {
        const scrollHeight = this.chat.scrollHeight;
        const height = this.chat.clientHeight;
        const maxScrollTop = scrollHeight - height;
        this.chat.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
    renderMessages(messages) {
        const { isTyping, bubbleStyles, chatBubble, showSenderName, parser } = this.props;
        const ChatBubble = chatBubble || ChatBubble_1.default;
        let group = [];
        const messageNodes = messages.map((message, index) => {
            group.push(message);
            if (!messages[index + 1] || messages[index + 1].id !== message.id) {
                const messageGroup = group;
                group = [];
                return (React.createElement(BubbleGroup_1.default, { key: index, messages: messageGroup, id: message.id, showSenderName: showSenderName, chatBubble: ChatBubble, avatar: message.avatar, timestamp: message.timestamp, parser: parser }));
            }
            return null;
        });
        if (isTyping) {
            messageNodes.push(React.createElement("div", { key: "isTyping", style: Object.assign({}, styles_1.default.chatbubbleWrapper) },
                React.createElement(ChatBubble, { message: new Message_1.default({ id: 1, message: '...', senderName: '' }), bubbleStyles: bubbleStyles })));
        }
        return messageNodes;
    }
    render() {
        const inputField = this.props.hasInputField && React.createElement(ChatInput_1.default, null);
        const { maxHeight, style } = this.props;
        return (React.createElement("div", { id: "chat-panel", style: Object.assign({}, styles_1.default.chatPanel, style) },
            React.createElement("div", { ref: c => {
                    this.chat = c;
                }, className: "chat-history", style: Object.assign({}, styles_1.default.chatHistory, { maxHeight }) },
                React.createElement("div", { className: "chat-messages" }, this.renderMessages(this.props.messages))),
            inputField));
    }
}
exports.default = ChatFeed;
//# sourceMappingURL=index.js.map