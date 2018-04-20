"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(messageData) {
        this.id = messageData.id;
        this.message = messageData.message;
        this.senderName = messageData.senderName || undefined;
        this.avatar = messageData.avatar;
        this.timestamp = messageData.timestamp;
        this.type = messageData.type || 'text';
        this.isRead = messageData.isRead || false;
        this.metaData = messageData.metaData || {};
    }
}
exports.default = Message;
//# sourceMappingURL=index.js.map