import Message from '../Message';
import {StarStyle} from "../Star/interface";
export default interface ChatBubbleProps {
  message: Message
  bubbleStyles: {
    userBubble: object
    chatbubble: object
    text: object
    star: StarStyle
  }
  bubblesCentered: boolean,
  parser?:any,
}
