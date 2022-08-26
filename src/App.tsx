import React from 'react';
import './App.css';

function App() {
    const names = ['Alex', 'Bobby', 'Jimin', 'Jason'];
    const users = [{name: 'Alex'}, {name: 'Bobby'}, {name: 'Jimin'}, {name: 'Jason'}];

    const liElements = names.map(n => <li>{n}</li>)
    const liUsers = users.map((u, index) => <li key={index}>{u.name}</li>)

    return (
        <div className="App">
            {liElements}
            {liUsers}
        </div>
    );
}

export default App;
