## Message

The `Message` object is the standard class for handling message data in `react-chat-ui`.

#### Constructor

* **id**: The `id` of a message is a number used to identify which user created the message. It's used for grouping messages together and determining the bubble colour. _(This may be renamed in the future)_
* **message**: This is the actual text that will be displayed in the bubble
* **senderName** (optional): the sender name is an optional parameter that associates a name to a message _(can be thought of as a string representation of an `id`, although your id's will be unique, users may have the same name)_
* **avatar**: React node that displays the avatar of the user, typically an image or svg
* **timestamp**: Post date of the message
* **type**: Type of message default to text but can be any of 'text','image' or 'file'
* **isRead**: Determines of your message is read by other person or not defaults to false
* **metaData**: Object that holds the attributes 'thumbnail' - url of image to display as thumbnail , 'name' - name of file , 'fileType' which are used to further specify the data for any other type other than text on 'type' field
* **styles**: Apply individual styles to bubbles overiding the norm , needs to contain the an attribute 'bubbleStyles' containing react style object
```javascript
const myMessage = new Message(1, 
'Hello World!', 
'Elon Musk',
<img src='./myimage.png'/>,new Date(),
'text',
true,
{},
{bubbleStyles:{backgroundColor:'green'}});

const anotherMessage = new Message(0, 'Hey Elon!');
```
