
# 🙊 MonkasChat

A library of React components for building chat UI's



## Features

* Custom Avatar Support
* User name
* Timestamp / time messages sent
* Multiple user grouping (try it out in the demo)
* Message seen tick
* Message types (Image / Files)

## Upcoming features 

* Custom messages

Keep in mind that this project is still in the early stages of development. If you encounter a bug or have a feature request plz make a comment

## Installation

`npm install monkas-chat --save`

## Demo

[Chat demo click here](https://dasithkuruppu.github.io/react-chat-ui/demo/)

## Basic Usage

```javascript
import { ChatFeed, Message } from 'monkas-chat'

// Your code stuff...

render() {

  return (

    // Your JSX...

    <ChatFeed
      messages={this.state.messages} // Boolean: list of message objects
      isTyping={this.state.is_typing} // Boolean: is the recipient typing
      hasInputField={false} // Boolean: use our input, or use your own
      showSenderName // show the name of the user who sent the message
      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
      style={{height:400px}}// styles for feed

      // JSON: Custom bubble styles
      bubbleStyles={
        {
          text: {
            fontSize: 30
          },
          chatbubble: {
            borderRadius: 70,
            padding: 40
          }
        }
      }
    />

    // Your JSX...

  )

}
```

Make sure to keep a list of proper message objects in your class state.
Like so:

```javascript
//...
this.state = {
  messages: [
    new Message({
      id: 1,
      message: "I'm the recipient! (The person you're talking to)",
      senderName: "George",
      avatar:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArL5ZYgvYomgLZ6QKxjLO6iK-w6UqdRakfN56wFzWwE7ewq0O"/>,
      timestamp: new Date(),
      type:'text',
      styles:{
        bubbleStyles:{backgroundColor:'green'} // apply individual styles if needed to bubbles
      }
    }), // Gray bubble
    new Message({ id: 0, message: "I'm you -- the blue bubble!",isRead:true }), // Blue bubble
  ],
  //...
};
//...
```

## API

* [ChatFeed](./src/ChatFeed)
* [Message](./src/Message)
* [ChatBubble](./src/ChatBubble)
* [BubbleGroup](./src/BubbleGroup)

## Credits!¡1 🔧

Originally forked from https://github.com/brandonmowat/react-chat-ui , Contributions are welcome 



## TODO

* documentation
* documentation
* documentation

## Development

```sh
npm run dev

```
