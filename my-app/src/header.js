import React from 'react';
import PropTypes from 'prop-types';
import HeaderInput from './headerInput'
import ReactMixin from 'react-mixin'
import Publicfunc from './common/publicfunc'
import './css/header.css'

class Header extends React.Component {

    constructor(){
        super();
        let datetime = new Date();
        this.state = {
            username :"",
            DateTime : datetime,
            isMinHeight:true
        }; //初始化赋值
    };
    inputName(event){
        this.setState({
            username:event.target.value
        })
        
        Publicfunc.log(event.target.value);

    };

    switchHeight(){
        this.setState({
            isMinHeight:!this.state.isMinHeight
        });
    };
    render(){
        const styleHeader = {
            header:{
                padding:"20px",
                backgroundColor:"#e3e3e3"
            },
            font:{
                color:(this.state.isMinHeight)?"#000000":"#3f42ac"
            },
        };
        let datetime = new Date();

        return(
            <div className = "header" style = {styleHeader.header}>
                <h1 onClick={this.switchHeight.bind(this)} style = {styleHeader.font} >Hello ! {this.state.username}</h1>
                <h2>The {this.props.Time} visit today</h2>
                <h3>Today is {datetime.getFullYear() + "-" + (datetime.getMonth()+1) + "-" + (datetime.getDay()+1)}</h3>
                <HeaderInput {...this.props} inputName = {this.inputName.bind(this)}/>
            </div>
        )

    }
}

Header.propTypes  = {
    Time:PropTypes.number.isRequired //检验传值类型及是否有送值
};

ReactMixin(Header.prototype, Publicfunc)

export default Header;


