import React from 'react'
import Header from './Header.jsx'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import '../styles/profile.css'

class Profile extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            fieldName: 'Профиль',
            nameForButton: 'Чаты'
        }
    }

    static propTypes = {
        profile: PropTypes.object.isRequired,
    }
    
    render () {
        return (<div className='layout'> 
        <Header 
            buttonName={this.state.nameForButton}
            chatId=""
            profilePage={this.state.fieldName}
            handleChoiseProfile = {this.handleChoseProfile}
        ></Header>
        <div className="profileRow">
            <div className="nameAvatarRow">
                <h3 className='userName'>{this.props.profile[1].name}</h3>
                <div 
                    className='avatar'
                    style= {{ background: `url(${this.props.profile[1].p_avatar})`}}
                ></div>
            </div>
            <div className='mainProfile'>
                <h3 className='userTel'>{this.props.profile[1].tel}</h3>
                <p className='userStatus'>{this.props.profile[1].about}</p>
                <h3>Всякая</h3>
                <h3>разная</h3>
                <h3>инфа</h3>
            </div>
        </div>
    </div>)
    }
}

const mapStateToProps = ({profileReducer}) => ({
    profile: profileReducer.profile
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Profile);