import React from 'react';
import MessageField from './MessageField.jsx'
import ChatList from './ChatList.jsx'
import Header from './Header.jsx'
import PropTypes from 'prop-types'

export default class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            chats: {
                1: {title: 'Чат 1', messageList: [1]},
                2: {title: 'Чат 2', messageList: [2]},
                3: {title: 'Чат 3', messageList: [3]},
            },
            messages: {
                1: { text: "Привет!", sender: 'bot' },
                2: { text: "Здравствуйте!", sender: 'bot' },
                3: { text: "Как дела?", sender: 'bot' },
            },
            fieldName: 'Чат',
            nameForButton: 'Профиль'
        }
        this.sendMessage = this.sendMessage.bind(this)
    }
    static propTypes = {
        chatId: PropTypes.number.isRequired,
    }
    static defaultProps = {
        chatId: 1,
    }

    componentDidUpdate(prevProps, prevState) {
        const { messages } = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(() =>
                this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000);
        }
    }
    sendMessage (message, sender) {
        const {  messages, chats } = this.state
        const { chatId } = this.props;
        const messageId = Object.keys(messages).length + 1;

        this.setState({
            messages: {...messages,
                [messageId]: {text: message, sender: sender}},
            chats: {...chats,
                [chatId]: { ...chats[chatId],
                    messageList: [...chats[chatId]['messageList'], messageId]
                }
            },
        })
    }
    addChat = (title) =>  {
        const { chats } = this.state;
        const chatId = Object.keys(chats).length + 1;

        this.setState ({
            chats: {...chats,
                [chatId]: {title: title, messageList: [] }
        }})
    }

    render () {
        return (<div className='layout'> 
            <Header 
                buttonName={this.state.nameForButton}
                chatId={this.props.chatId}
                profilePage={this.state.fieldName}
            ></Header>
            <div className="row">
            <ChatList 
                chats={ this.state.chats}
                addChat = { this.addChat }
            />
            <MessageField 
                chatId={ this.props.chatId }
                chats={ this.state.chats }
                messages={ this.state.messages }
                sendMessage={ this.sendMessage }
            />
            </div>
        </div>)
    }
}