import React from 'react';

import Login from 'containers/Login';
import Logout from 'containers/Logout';
import TimeGrid from 'containers/TimeGrid';

class App extends React.Component {
    render() {
        const { children, isLoggedIn } = this.props;

        const content = isLoggedIn === true ?
            [
                children,
                <Logout />,
            ] :
            <Login />

        return <div id="App">
            <h1>App</h1>
            { content }
            <TimeGrid />
        </div>
    }
}

export default App;