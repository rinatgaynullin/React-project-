import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';



export default class ChatList extends  React.Component {

	state = {
		input: '',
	}

	static propTypes= {
		chats: PropTypes.object.isRequired,
		addChat: PropTypes.func.isRequired,
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleKeyUp = (event) => {
		if (event.keyCode === 13) { // Enter
			this.handleAddChat(this.state.input)
		}
	};
	handleAddChat = () => {
		if ( this.state.input.length > 0 ) {
				this.props.addChat (this.state.input)
				this.setState ({
					input: ''
				});
		}
	};

  	render () {

		const { chats } = this.props
		const chatElement = Object.keys(chats).map (chatId => (
			<Link key={ chatId } to={ `/chat/${chatId}` }>
               <ListItem
				    primaryText={ chats[chatId].title }
				    leftAvatar={<Avatar src="https://placehold.it/50x50" />}
					rightIcon={<CommunicationChatBubble />}
                   leftIcon={ 
				   <ContentSend/> }
               />
           </Link>));
		
  return (<div className='chatList'>
	<List>
	  	{ chatElement }
		<ListItem
		  	
			key="Add new chat"
            leftIcon={ <AddIcon /> }
            onClick={ this.handleAddChat }
            style={ { height: '60px' } }
            children= {<TextField
            	key="textField"
            	fullWidth
                name="input"
                hintText="Добавить новый чат"
                onChange={ this.handleChange }
                value={ this.state.input }
				onKeyUp={ this.handleKeyUp }
			/>}
		/>
	</List>
	
	
</div>
)
  }
}
