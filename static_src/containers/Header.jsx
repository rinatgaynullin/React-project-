import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";

import '../styles/header.css'

class Header extends React.Component {
    state ={
        profileId: 1
    }
    static propTypes = {
        profilePage: PropTypes.string,
        profile: PropTypes.object.isRequired,
    }
    
    handlePath () {
            if (window.location.pathname === '/profile/') return '/'
            else return '/profile/'   
        }
    
    render () {

        return (
            <AppBar
                className= 'header'
                style= { {
                    height: '100px',
                    flexDirection: 'row'
                    
                } }
                title= {`${this.props.profilePage} ${this.props.chatId}`}
                titleStyle= { {
                    fontFamily: 'Robotic',
                    width: '300px',
                    margin: '0',
                    // flex: 'none'
                    flex: '0.5 0 100px'
                    
    
                } }
                iconElementRight={ 
                    <Link to={this.handlePath}>
                    <button 
                        className='profileLink'
                    >
                        {this.props.buttonName}
                    </button>
                    </Link>
                }
                iconStyleRight={{margin: '0' }}
                iconStyleLeft={{margin: '0' }}
                showMenuIconButton= {true}
                iconElementLeft= {
                    <div className="profileName" >
                        {this.props.profile[1].name}
                    </div>
                }
                
               
            >   
            </AppBar>
        )
    }
}

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer.profile
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Header);