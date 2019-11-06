import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from '../components/Message/index.jsx';
import '../styles/style.css';

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        chats: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
    };


    state = {
        input: '',
    };


handleSendMessage = (message, sender) => {
    if (this.state.input.length > 0 || sender === 'bot') {
        this.props.sendMessage(message, sender)
    }
    if (sender === 'me') {
        this.setState({ input: '' })
    }
};

   handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value });
   };

   handleKeyUp = (event) => {
       if (event.keyCode === 13) { // Enter
           this.handleSendMessage(this.state.input, 'me')
       }
   };

   render() {
       const { chatId } = this.props;

       const messageElements = this.props.chats[chatId].messageList.map(messageId => (
           <Message
               key={ messageId }
               text={ this.props.messages[messageId].text }
               sender={ this.props.messages[messageId].sender }
           />));

       	return <div className="message-field-row">
		    <div className='message-field'>
				{ messageElements }
			</div>
			<div className='textField'>
                <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />
                <FloatingActionButton 
                    onClick={ () => this.handleSendMessage( this.state.input, 'me' ) 
                }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
		</div>
   	}
}
const mapStateToProps = ({chatReducer, messageReducer}) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
 

