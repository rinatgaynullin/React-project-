import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar';
import { push } from 'connected-react-router'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import '../styles/header.css';


class Header extends React.Component {

    static propTypes = {
        profilePage: PropTypes.string,
        profile: PropTypes.object.isRequired,
        push: PropTypes.func.isRequired,
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
                    flex: '0.5 0 100px'
                } }
                iconElementRight={ 
                    <button 
                        className='profileLink'
                        onClick= {() => this.props.push(this.handlePath())}
                    >
                        {this.props.buttonName}
                    </button>
                }
                iconStyleRight={{margin: '0' }}
                iconStyleLeft={{margin: '0' }}
                showMenuIconButton= {true}
                iconElementLeft= {
                    <div className="profileName" >
                        {/* {this.props.profile[1].name} */}
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

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);