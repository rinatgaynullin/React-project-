import React from 'react';
import {MessageField} from './MessageField.jsx'
import {ChatList} from './ChatList.jsx'
import {Header} from './Header.jsx'

export default class Layout extends React.Component {
    render () {
        return (<div className='layout'> 
            <Header></Header>
            <div className="row">
            <ChatList/>
                <MessageField/>
                
            </div>
        </div>)
    }
}