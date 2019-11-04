import React from 'react';
import './style.css'

export default class Message extends React.Component {
	constructor(props) { 
    super (props) 
	}
	render() {
		return <div
		className="message"
		style={ { alignSelf: this.props.sender === 'bot' ?'flex-start' : 'flex-end' } }>
		<div>{ this.props.text }</div>
		<div className="message-sender">{ this.props.sender }</div>
		
		</div>

    }
}

