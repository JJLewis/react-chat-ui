"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles = {
    chatInput: {
        flex: 1,
    },
    inputStyle: {
        border: 'none',
        borderTopWidth: '1',
        borderTopStyle: 'solid',
        borderTopColor: '#ddd',
        fontSize: '16',
        outline: 'none',
        padding: '30',
        width: '100%',
    },
};
const ChatInput = (props) => {
    const { inputStyles, inputPlaceholder } = props;
    return (React.createElement("div", { className: "chat-input", style: styles.chatInput },
        React.createElement("input", { type: "text", style: inputStyles || styles.inputStyle, placeholder: inputPlaceholder })));
};
exports.default = ChatInput;
//# sourceMappingURL=index.js.map