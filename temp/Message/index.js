"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(messageData) {
        this.id = messageData.id;
        this.message = messageData.message;
        this.senderName = messageData.senderName || undefined;
    }
}
exports.default = Message;
//# sourceMappingURL=index.js.map