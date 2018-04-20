import * as React from 'react';
import ChatBubbleProps from './interface';
import styles from './styles';

const defaultBubbleStyles = {
  userBubble: {},
  chatbubble: {},
  text: {},
};

export default class ChatBubble extends React.Component {
  props;

  constructor(props: ChatBubbleProps) {
    super(props);
  }

  public render() {
    const { bubblesCentered } = this.props;
    let { bubbleStyles } = this.props;
    bubbleStyles = bubbleStyles || defaultBubbleStyles;
    const { userBubble, chatbubble, text } = bubbleStyles;

    // message.id 0 is reserved for blue
    const readStatus=(
      this.props.message.id===0 && this.props.message.isRead && 
      (
      <svg style={{float:'right',display:'inline-block',marginLeft:'6px',marginTop:'5px'}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" width="15" height="15">
      <g id="surface1_4_">
        <path fill="#4CAF50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
        <path fill="#CCFF90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
      </g>
      </svg>
     )
    );
    
    const chatBubbleStyles =
      this.props.message.id === 0
        ? {
            ...styles.chatbubble,
            ...bubblesCentered ? {} : styles.chatbubbleOrientationNormal,
            ...chatbubble,
            ...userBubble,
          }
        : {
            ...styles.chatbubble,
            ...styles.recipientChatbubble,
            ...bubblesCentered
              ? {}
              : styles.recipientChatbubbleOrientationNormal,
            ...userBubble,
            ...chatbubble
          };

    return (
      <div
        style={{
          ...styles.chatbubbleWrapper,
        }}
      >
      {
        this.props.message.type=="text" &&
        (<div style={chatBubbleStyles}>
          <p style={{ ...styles.p, ...text }}>{this.props.message.message}</p>
          {readStatus}
        </div>)
      }

      {
        this.props.message.type==="image" &&
        (<div style={chatBubbleStyles}>
          <p style={{ ...styles.p, ...text }}>
            <img src={this.props.message.message}/>
          </p>
          {readStatus}
        </div>)
      }
      {
        this.props.message.type==="file" &&
        (<div style={chatBubbleStyles}>
          <p style={{...styles.p,...text}}>
            <a href={this.props.message.message} download={this.props.message.metaData.name || 'ChatFile'}>
              {
                this.props.message.metaData.thumbnail && <img style={{maxWidth:'50px',height:'auto'}} src={this.props.message.metaData.thumbnail}/>
              }
              {
                this.props.message.metaData.fileType && <h4 style={{textAlign:'center'}}> {`Download ${this.props.message.metaData.name || 'file'} ${this.props.message.metaData.fileType}`} </h4>
              }
            </a>
          </p>
          {readStatus}
        </div>)
      }
      
       
      </div>
    );
  }
}

export { ChatBubbleProps };
