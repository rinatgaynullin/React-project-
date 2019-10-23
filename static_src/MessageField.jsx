import React from 'react';
import Message from './Message.jsx'



export default class MessageField extends React.Component {
   	constructor (props) {
      	super(props)
      	this.state = {
        	messages: ["Привет!", "Как дела?"],
        	botAnswers: ['Чем могу помочь','Здравствуйте','Чего желаете','Как вы,'],
        	autor: 'Ринат'
      	}
      	this.handleClick = this.handleClick.bind(this)
  	}

   	randomChoise (arr) {
    return arr [Math.floor (arr.length * Math.random ())]
	}

   	componentDidUpdate() {
    	if (this.state.messages.length % 2 === 1) {  // Остаток от деления на 2
        	setTimeout(() =>
        		this.setState(
            		{ 'messages': [...this.state.messages, `${this.randomChoise(this.state.botAnswers)} ${this.state.autor}?`] }),1000);
    	}
	}

  	handleChange () {

  	}
  	handleClick ()  {
       this.setState({ messages: [ ...this.state.messages, 'Нормально' ] });
   	};

   	render() {
       	const messageElements = this.state.messages.map((text, index) => (
        	<Message key={ index } text={ text } />));

       	return <div>
           	{ messageElements }
            <span>{this.state.autor}</span>
           	<button onClick={ this.handleClick }>Отправить сообщение</button>
       	</div>
   	}
}


// export default class MessageField extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { 
//         items: [], 
//         text: '', 
//         botAnswer: ['1','2','3','4']
//       };
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     randomChoise (arr) {
//       return arr[Math.floor(arr.length * Math.random())]
//     }
//     handleChange(e) {
//       this.setState({ text: e.target.value });
//     }
  
//     handleSubmit(e) {
//       e.preventDefault();
//       if (!this.state.text.length) {
//         return;
//       }
//       const newItem = {
//         text: this.state.text,
//         id: Date.now()
//       };
//       this.setState(state => ({
//         items: state.items.concat(newItem)
//       }));
      
//     }
//     componentDidUpdate() {
//       if (this.state.text.length != 0) {  // Остаток от деления на 2
//           setTimeout(() =>
//           this.setState({ 
//             text: this.randomChoise(this.state.botAnswer),
//             }),
//           1000);
//           this.setState({text: ''})
//       }
      
//     }

//     render() {
//       return (
//         <div>
//           <h3>Чат</h3>
//           <Message items={this.state.items} />
//           <form onSubmit={this.handleSubmit}>
//             <label htmlFor="new-message">
//               Новое сообщение
//             </label>
//             <input
//               id="new-message"
//               onChange={this.handleChange}
//               value={this.state.text}
//             />
//             <button>
//               Отправить
//             </button>
//           </form>
//         </div>
//       );
//     }
    
    

  
//   }