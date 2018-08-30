import React from 'react';
import { hot } from 'react-hot-loader';
import Intro from './components/Intro';
import Content from './components/Content';


/**
 * Stateless Component App which holds the Components Intro and Content
 */
class App extends React.Component {
    constructor() {
        super();
    }

    render = () => (
        <div>
            <Intro />
            <Content />
        </div>
    );
}

export default hot(module)(App);
