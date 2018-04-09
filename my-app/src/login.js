import React from 'react';
import { Row, Col } from 'antd';
import { Calendar } from 'antd';


class LoginComponent extends React.Component{
    render(){
        console.log(Row)
        return(
            <div>
                <Row>
                <Col span={6} offset={9}>
                    <Calendar fullscreen={false}/>
                </Col>      
                </Row> 
            </div>
        )
    }
}

export default LoginComponent;