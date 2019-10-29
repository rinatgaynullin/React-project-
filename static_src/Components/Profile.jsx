import React from 'react'
import {Header} from './Header.jsx'

export default class Profile extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            fieldName: 'Профиль',
            nameForButton: 'Чаты'
        }
    }
    render () {
        return (<div className='layout'> 
        <Header 
            buttonName={this.state.nameForButton}
            chatId=""
            profilePage={this.state.fieldName}
        ></Header>
        <div className="row">
            <div className='mainProfile'>Профиль</div>
        </div>
    </div>)
    }
}