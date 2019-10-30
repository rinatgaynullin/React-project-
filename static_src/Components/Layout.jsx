import React from 'react';
import MessageField from './MessageField.jsx'
import {ChatList} from './ChatList.jsx'
import {Header} from './Header.jsx'
import PropTypes from 'prop-types'

export default class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            fieldName: 'Чат',
            nameForButton: 'Профиль'
        }
    }
    static propTypes = {
        chatId: PropTypes.number,
    }
    static defaultProps = {
        chatId: 1,
    }
    render () {
        return (<div className='layout'> 
            <Header 
                buttonName={this.state.nameForButton}
                chatId={this.props.chatId}
                profilePage={this.state.fieldName}
            ></Header>
            <div className="row">
            <ChatList/>
                <MessageField chatId={ this.props.chatId }/>
                
            </div>
        </div>)
    }
}