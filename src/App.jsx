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
        this.state = { formOpen: false };
        this.handleFormOpen = this.handleFormOpen.bind(this);
    }

    handleFormOpen() {
        this.setState({ formOpen: true });
    }

    render = () => (
        <div>
            <Intro callback={() => this.handleFormOpen()} />
            <Content formOpen={this.state.formOpen} />
        </div>
    );
}

export default hot(module)(App);
