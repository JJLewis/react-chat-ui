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
        const readStatus = (this.props.message.id === 0 && this.props.message.isRead &&
            (React.createElement("svg", { style: { float: 'right', display: 'inline-block', marginLeft: '6px', marginTop: '9px' }, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 50 50", width: "15", height: "15" },
                React.createElement("g", { id: "surface1_4_" },
                    React.createElement("path", { fill: "#4CAF50", d: "M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z" }),
                    React.createElement("path", { fill: "#CCFF90", d: "M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z" })))));
        const chatBubbleStyles = this.props.message.id === 0
            ? Object.assign({}, styles_1.default.chatbubble, bubblesCentered ? {} : styles_1.default.chatbubbleOrientationNormal, chatbubble, userBubble) : Object.assign({}, styles_1.default.chatbubble, styles_1.default.recipientChatbubble, bubblesCentered
            ? {}
            : styles_1.default.recipientChatbubbleOrientationNormal, userBubble, chatbubble);
        return (React.createElement("div", { style: Object.assign({}, styles_1.default.chatbubbleWrapper) },
            this.props.message.type == "text" &&
                (React.createElement("div", { style: chatBubbleStyles },
                    React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) }, this.props.message.message),
                    readStatus)),
            this.props.message.type === "image" &&
                (React.createElement("div", { style: chatBubbleStyles },
                    React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) },
                        React.createElement("img", { src: this.props.message.message })),
                    readStatus)),
            this.props.message.type === "file" &&
                (React.createElement("div", { style: chatBubbleStyles },
                    React.createElement("p", { style: Object.assign({}, styles_1.default.p, text) },
                        React.createElement("a", { href: this.props.message.message, download: this.props.message.metaData.name || 'ChatFile' },
                            this.props.message.metaData.thumbnail && React.createElement("img", { style: { maxWidth: '50px', height: 'auto' }, src: this.props.message.metaData.thumbnail }),
                            this.props.message.metaData.fileType && React.createElement("h4", { style: { textAlign: 'center' } },
                                " ",
                                `Download ${this.props.message.metaData.name || 'file'} ${this.props.message.metaData.fileType}`,
                                " "))),
                    readStatus))));
    }
}
exports.default = ChatBubble;
//# sourceMappingURL=index.js.map