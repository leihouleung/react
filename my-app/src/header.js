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
            DateTime : datetime
        }; //初始化赋值
    };
    inputName(event){
        this.setState({
            username:event.target.value
        })
        
        Publicfunc.log(event.target.value);

    };

    render(){

        let datetime = new Date();

        return(
            <div className = "header">
                <h1>Hello ! {this.state.username}</h1>
                <h2>The {this.props.Time} visit today</h2>
                <h3>Today is {datetime.getFullYear() + "-" + (datetime.getMonth()+1) + "-" + datetime.getDay()}</h3>
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


