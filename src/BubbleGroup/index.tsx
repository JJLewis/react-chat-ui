import * as React from 'react';
import BubbleGroupInterface from './interface';
import DefaultChatBubble from '../ChatBubble';
import Message from '../Message';
import styles from './styles';
import * as moment from 'moment';
export default class BubbleGroup extends React.Component {
  props;

  constructor(props: BubbleGroupInterface) {
    super(props);
  }

  /**
   * Parses and collects messages of one type to be grouped together.
   * @return {messageNodes} - a JSX wrapped group of messages
   */
  renderGroup(messages: [Message], id: number) {
    const {
      bubblesCentered,
      bubbleStyles,
      showSenderName,
      chatBubble,
      senderName,
      avatar,
      timestamp,
      parser

    } = this.props;
    const ChatBubble = chatBubble || DefaultChatBubble;
    const sampleMessage = messages[0];
   
    const messageNodes = messages.map((message, i) => {
      return (
        <ChatBubble
          key={i}
          message={message}
          bubblesCentered={bubblesCentered}
          bubbleStyles={bubbleStyles}
          parser={parser}
        />
      );
    });

    return (
      <div style={styles.chatbubbleWrapper}>
        {showSenderName &&
          ((senderName || sampleMessage.senderName) !== '' &&
            (sampleMessage.id !== 0 && (
              <div style={styles.bubbleGroupHeader}>
                {avatar||''}
              </div>
            )))}
          <div style={{width:"80%",display:'inline-block',float:(sampleMessage.id==0 ? 'right':'left')}}>
            <div style={{float:(sampleMessage.id==0 ? 'right':'left')}}>
              <h5 style={{display:"inline",verticalAlign:"text-top"}}>
                {(showSenderName && sampleMessage.id!==0) ? sampleMessage.senderName : senderName}
                <small style={{fontSize:'9px',marginLeft:'5px'}}>
                  {timestamp ? moment(timestamp).fromNow():''}
                </small>
              </h5>
            </div>
            <div style={{marginTop: '1.5em'}}>
              {messageNodes}
            </div>
          </div>
      </div>
    );
  }

  render() {
    const { messages, id } = this.props;
    return this.renderGroup(messages, id);
  }
}
