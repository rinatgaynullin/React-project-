import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

export class ChatList extends  React.Component {
  render () {
  return (<div className='chatList'>
    <List>
      <Subheader>Recent chats</Subheader>
      <Link to="/chat/1/">
        <ListItem
          primaryText="Chat 1"
          leftAvatar={<Avatar src="https://placehold.it/50x50" />}
          rightIcon={<CommunicationChatBubble />}
        />
      </Link>
      <Link to="/chat/2/">
        <ListItem
          primaryText="Chat 2"
          leftAvatar={<Avatar src="https://placehold.it/50x50" />}
          rightIcon={<CommunicationChatBubble />}
        />
      </Link>
      <Link to="/chat/1/">
        <ListItem
          primaryText="Chat 3"
          leftAvatar={<Avatar src="https://placehold.it/50x50" />}
          rightIcon={<CommunicationChatBubble />}
        />
      </Link>
    </List>
    
    
</div>
)
  }
}

export default ChatList;