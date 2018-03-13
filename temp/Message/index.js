"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(messageData) {
        this.id = messageData.id;
        this.message = messageData.message;
        this.senderName = messageData.senderName || undefined;
        this.avatar = messageData.avatar;
        this.timestamp = messageData.timestamp;
    }
}
exports.default = Message;
//# sourceMappingURL=index.js.map