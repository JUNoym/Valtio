import React from 'react';
import logo from './logo.svg';
import './App.css';
import { state } from './App'


const handler_click = () => {
    console.log('ボタン押された', state.count)
    state.count += 10
}

function CounterA() {
    return (
        <div className="App">
            <h1>CounterAコンポーネントだよ</h1>
            <div>
                {state.count}
                <button onClick={handler_click}>+10</button>
            </div>
        </div>
    );
}

export default CounterA;
