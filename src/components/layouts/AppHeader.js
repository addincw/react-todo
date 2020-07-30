import React from 'react';
import { useSelector } from 'react-redux';

function AppHeader(props) {
    const page = useSelector(state => state.page)

    return (
        <header className="App-header mb-5">
            <h1 className="App-title">{props.title}</h1>
            <p>You're in {page.title} page</p>
        </header>
    )
}

export default AppHeader;