"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Message = function Message(messageData) {
    _classCallCheck(this, Message);

    this.id = messageData.id;
    this.message = messageData.message;
    this.senderName = messageData.senderName || undefined;
    this.avatar = messageData.avatar;
    this.timestamp = messageData.timestamp;
    this.type = messageData.type || 'text';
    this.isRead = messageData.isRead || false;
    this.metaData = messageData.metaData || {};
    this.styles = messageData.styles || null;
};

exports.default = Message;
//# sourceMappingURL=index.js.map