import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom'


export class Header extends React.Component {
    constructor ( props ) {
        super(props)
        this.state = {

        }
    }
    static propTypes = {
        profilePage: PropTypes.string,

    };
    
    handlePath () {
            if (window.location.pathname === '/profile/') return '/'
            else return '/profile/'   
        }
       
    render () {

        return (
            <AppBar
            style= { {
                height: '100px'
             } }
                title= {`${this.props.profilePage} ${this.props.chatId}`}
                titleStyle= { {
                    fontFamily: 'Robotic',
                    width: '300px',
    
                } }
                iconElementRight={ 
                    <Link to={this.handlePath}>
                    <button className='profileLink'>{this.props.buttonName}</button>
                    </Link>
                }
                iconStyleRight={{margin: '15px 0 0 0' }}
                showMenuIconButton= {false}
                

            >   
                
            </AppBar>
        )
    }
}