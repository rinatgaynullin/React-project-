import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import { loadChats } from '../actions/chatActions';
import Message from '../components/Message/index.jsx';
import { loadProfile } from '../actions/profileActions';
import { delMessage } from '../actions/delMessageActions';
import { loadMessages } from '../actions/messageActions';
import CircularProgress from 'material-ui/CircularProgress';
import '../styles/style.css';
import profileReducer from '../reducers/profileReducer';



class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        chats: PropTypes.object.isRequired,
        messages: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        delMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };


    state = {
        input: '',
    };

    componentDidMount() {
        this.props.loadMessages();
        this.props.loadChats();
        this.props.loadProfile();
        
    }

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
        if (this.props.isLoading) {
            return <CircularProgress/>
        } 

        const { chatId } = this.props;

        const messageElements = this.props.chats[chatId].messageList.map(messageId => (
			<div 
				className="messageBlock"
				style={ { alignSelf: this.props.messages[messageId].sender === 'bot' ?'flex-start' : 'flex-end' }}
			>
                <Message
                    key={ messageId }
                    messageId={messageId}
                    text={ this.props.messages[messageId].text }
					sender={ this.props.messages[messageId].sender }
                />
				<button
				key={Date.now()} 
				style={ { alignSelf: this.props.messages[messageId].sender === 'bot' ?'flex-end' : 'flex-start' } }
				onClick = {() =>  this.props.delMessage (messageId,this.props.chatId)}>X</button>
			</div>
                
        ));

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
                    <SendIcon/>
                </FloatingActionButton>
            </div>
		</div>
   	}
}
const mapStateToProps = ({chatReducer, messageReducer}) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
    delMessage,
    loadChats, 
    loadMessages,
    loadProfile,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);


