import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    render() {
        return (
            <section>
                <File />
                <List />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));