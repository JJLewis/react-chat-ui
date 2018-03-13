/**
 * A statndardized message object for use
 * in rendering messages in the chat feed.
 */
import * as React from 'react';

interface MessageData {
  id: number;
  message: string;
  senderName?: string;
  avatar?: any;
  timestamp?: Date;
}

export default class Message {
  /**
   * Message object for organizing and storing current message data.
   */
  id: number;
  message: string;
  senderName?: string;
  avatar?: any;
  timestamp?: Date;
  constructor(messageData: MessageData) {
    this.id = messageData.id; // id of the sender (0 is reserved for "blue bubble")
    this.message = messageData.message;
    this.senderName = messageData.senderName || undefined;
    this.avatar=messageData.avatar;
    this.timestamp=messageData.timestamp;
  }
}
