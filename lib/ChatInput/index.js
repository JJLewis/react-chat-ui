"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles = {
    chatInput: {
        flex: 1
    },
    inputStyle: {
        border: 'none',
        borderTopWidth: '1',
        borderTopStyle: 'solid',
        borderTopColor: '#ddd',
        fontSize: '16',
        outline: 'none',
        padding: '30',
        width: '100%'
    }
};
var ChatInput = function ChatInput(props) {
    var inputStyles = props.inputStyles,
        inputPlaceholder = props.inputPlaceholder;

    return React.createElement("div", { className: "chat-input", style: styles.chatInput }, React.createElement("input", { type: "text", style: inputStyles || styles.inputStyle, placeholder: inputPlaceholder }));
};
exports.default = ChatInput;
//# sourceMappingURL=index.js.map