import React from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageField from './MessageField.jsx'
import ChatList from './ChatList.jsx'
import Header from '../components/Header/index.jsx'
import PropTypes from 'prop-types'
import { sendMessage } from "../actions/messageActions";

class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            // messages: {
            //     1: { text: "Привет!", sender: 'bot' },
            //     2: { text: "Здравствуйте!", sender: 'bot' },
            //     3: { text: "Как дела?", sender: 'bot' },
            // },
            fieldName: 'Чат',
            nameForButton: 'Профиль'
        }
    }
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        sendMessage: PropTypes.func.isRequired, 
        messages: PropTypes.object.isRequired,      
    }
    static defaultProps = {
        chatId: 1,
        
    }

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.props;
        if (Object.keys(prevProps.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(() =>
                this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
        }
    }
 
    sendMessage = (message, sender) => {
        const { chatId, messages } = this.props;
        const messageId = Object.keys(messages).length + 1; 
        this.props.sendMessage(messageId, message, sender, chatId)
    };
 
 

    render () {
        return (<div className='layout'> 
            <Header 
                buttonName={this.state.nameForButton}
                chatId={this.props.chatId}
                profilePage={this.state.fieldName}
            ></Header>
            <div className="row">
            <ChatList 
                
            />
            <MessageField 
                chatId={ this.props.chatId }
                sendMessage={ this.sendMessage }
            />
            </div>
        </div>)
    }
}
const mapStateToProps = ({messageReducer}) => ({
    messages: messageReducer.messages,
});

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
