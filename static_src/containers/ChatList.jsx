import React from 'react';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { push } from 'connected-react-router'
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import { addChat } from '../actions/chatActions';
import '../styles/chatList.css'



class ChatList extends  React.Component {

	state = {
		input: '',
	}

	static propTypes = {
		chats: PropTypes.object.isRequired,
		addChat: PropTypes.func.isRequired,
		push: PropTypes.func.isRequired,
		backGround: PropTypes.bool.isRequired,
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
	handleBotMessage (chatId) {
		if ( this.props.backGround === true ) return 'red'
		
	}

  	render () {
		const { chats } = this.props
		const chatElement = Object.keys( chats ).map ( chatId => (
			
               <ListItem
			   		style = { {backgroundColor: this.handleBotMessage()} }
			   		key={chatId}
				    primaryText={ chats[chatId].title }
				    leftAvatar={<Avatar src="https://placehold.it/50x50" />}
					rightIcon={<CommunicationChatBubble/>}
                   leftIcon={ 
				   <ContentSend/> }
				   onClick= { () => this.props.push( `/chat/${chatId}` ) }
               />));
		
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
const mapStateToProps = ({ chatReducer }) => ({
	chats: chatReducer.chats,
	backGround: chatReducer.backGround,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat, push }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
 
