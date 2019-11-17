import React from 'react';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageField from './MessageField.jsx'
import ChatList from './ChatList.jsx'
import Header from './Header.jsx'
import PropTypes from 'prop-types'
import { sendMessage } from "../actions/messageActions";


class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
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
