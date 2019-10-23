
import React from 'react';




export default class Message extends React.Component {
	constructor(props) { 
    super (props) 
	}
	
	render() {
		return <div> { this.props.text } </div>
    }
}


// export class Message extends React.Component {
//     render() {
//       return (
//         <div>
//           {this.props.items.map(item => (
//             <div key={item.id}>{item.text}</div>
//           ))}
//         </div>
//       );
//     }
//   }
