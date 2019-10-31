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
        <div className="profileRow">
            <h2 className='userName'>Имя пользователя</h2>

            <div className='mainProfile'>
                <h3 className='userTel'>Телефон</h3>
                <p className='userStatus'>Статус типа как в контактике)))</p>
                <h3>Всякая</h3>
                <h3>разная</h3>
                <h3>инфа</h3>
            </div>
        </div>
    </div>)
    }
}