import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';

class Children extends React.Component {
    render() {
        return (
            <div>
                <h1>{ this.props.value }</h1>
                <h3>{ this.props.children }</h3>
                <hr/>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <Children value="메인 제목">이건 부제목</Children>
                <App name="홍길동" />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
