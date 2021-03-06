import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header'
import LoginComponent from './login';
import registerServiceWorker from './registerServiceWorker';

class Index extends React.Component {


    render() {
        let login = 2;

        return (
            <div>
                {login  ? <Header Time={login} /> : ''}
                <LoginComponent/>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
