import React from 'react';
import ReactDOM from 'react-dom';

// const element = React.createElement(
//    'h1',
//    { className: "element" },
//    'Кажется, мы подключили React',
// );

const messages = ['Привет!', 'Как дела?'];

const Message = (props) => <div className="message">{ props.text }</div>;

const MessageField = (props) => <div>
    <h1>Чат</h1>
    { props.messages.map(message => <Message text={ message } />) }
</div>;

let addMessage = ()=> {
    messages.push(props.value)
};

const AddMessageButton  = () => <button></button>

AddMessagebutton.addEventListener('click', (props) => addMessage());
ReactDOM.render(
   <MessageField messages={ messages } />,
   <AddMessageButton value = 'Нормально' ></AddMessageButton>,
   document.getElementById('root'),
);
