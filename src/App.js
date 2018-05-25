import React from 'react';
import PropTypes from 'prop-types';
import App2 from './App2';

export default class App extends React.Component {
    message = 'Hello, this is message!';
    age = 18;
    myStyle = { color: "red" };

    sayHello() {
        alert('안녕하세요! ' + this.props.name + ' ' + this.age + '세');
    }

    render() {
        let title = "React Study";
        return (
            <div>
                <h1 style={ this.myStyle }>{ title }</h1>
                <h3>Hi, Jessie! { this.props.name }</h3>
                <h3>{ new Date().toString() }</h3>
                <h3>{ this.message }</h3>
                <button type="button" onClick={ this.sayHello.bind(this) }>Hello</button>
                <App2 />
            </div>
        );
    }
}

// 애트리뷰트 디폴트값 설정
App.defaultProps = {
    name: '아무개'
};

// 애트리뷰트 값 타입 지정
App.propTypes = {
    name: PropTypes.string.isRequired
};