import React from 'react';
import Title from './Title';
import Contents from './Contents';
import Footer from './Footer';

export default class App2 extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Contents />
                <Footer />
            </div>
        );
    }
}