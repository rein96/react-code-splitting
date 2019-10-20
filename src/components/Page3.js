import React from 'react';
import logo from '../logo.svg';

const Page3 = ( { onRouteChange } ) => {
    return (
        <div className="App">

            <header className="App-header">
            <center>
                <h3> Code Splitting Method </h3>
                <h5> You are on <span style={{ color: 'fuchsia' }}>Page 3</span> </h5>
            </center>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <button onClick={ () => onRouteChange('page1')} > Page1 </button>
            <button onClick={ () => onRouteChange('page2')} > Page2 </button>
            <button className="disabled">Page3</button>
            
        </div>
    )
}

export default Page3
