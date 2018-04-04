import React from 'react';
import ReactDOM from 'react-dom';
class HeaderInput extends React.Component{
    confirmName(){
        this.refs.headerInput.style.display = "none";
    }
    render(){
        return(
            <div ref = "headerInput">
                <p>please input your name：<input type = "text" onChange={this.props.inputName} /></p>
                <input type="button" value="confirm" onClick={this.confirmName.bind(this)}/>
            </div>
        )   
    }
}


export default HeaderInput;