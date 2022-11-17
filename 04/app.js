import React from 'react';
import { createRoot } from 'react-dom/client';

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

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
