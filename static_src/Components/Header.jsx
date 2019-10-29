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
                title= {`${this.props.profilePage} ${this.props.chatId}`}
                titleStyle= { {fontFamily: 'Robotic'} }
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            >   
                <Link to={this.handlePath}>
                <button className='profileLink'>{this.props.buttonName}</button>
                </Link>
            </AppBar>
        )
    }
}