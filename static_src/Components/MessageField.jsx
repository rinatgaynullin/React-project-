import React from 'react';
import Message from './Message.jsx';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/style.css';



export  class MessageField extends React.Component {
   	constructor (props) {
      	super(props)
      	this.state = {
        	messages: [
				{text:"Привет!", sender:"bot"},
				 {text:"Как дела?", sender: "bot"}],
			botAnswers: ['Чем могу помочь','Здравствуйте','Чего желаете','Как вы,'],
			input: ''
      	}
		  this.SendMessage = this.SendMessage.bind(this)
		  this.handleChange = this.handleChange.bind(this)
		  this.handleKeyUp = this.handleKeyUp.bind(this)
		  
  	}

   	randomChoise (arr) {
    return arr [Math.floor (arr.length * Math.random ())]
	}

   	componentDidUpdate(prevProps,prevState) {
		if (this.state.messages[this.state.messages.length - 1].sender === 'me' && 
			prevState.messages.length < this.state.messages.length) {  // Остаток от деления на 2
        		setTimeout(() =>
        			this.setState(
            			{ 'messages': [...this.state.messages,{ text: this.randomChoise(this.state.botAnswers),sender: 'bot'} ] }),1000);
    	}
	}
	SendMessage (message)  {
	   this.setState({ 
		    messages: [ ...this.state.messages, {text: message, sender: 'me'} ],
			input: ''
		});
   	};

	handleChange (event) {
		this.setState ({[event.target.name]: event.target.value})
	};

	handleClick (message) {
		this.SendMessage(message)
	}
	handleKeyUp (event, message) {
		if (event.keyCode === 13) {
			this.SendMessage(message)
		}
	}
	

   	render() {
		const messageElements = this.state.messages.map((message, index) => (
		<Message key={ index } text={ message.text } sender={message.sender} />
		));

       	return <div className="message-field-row">
		    <div className = 'message-field'>
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
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                />
                <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                    <SendIcon />
                </FloatingActionButton>
            </div>
		</div>
   	}
}

