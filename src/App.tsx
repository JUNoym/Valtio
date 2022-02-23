import React from 'react';
import './App.css';
import { proxy, useSnapshot } from 'valtio'
import CounterA from './CounterA'
import AddText from './Add_text'

// どこからでもアクセスできるようにexport
export const state = proxy({ count: 0, text: ["やること1"] })

const handler_click = () => {
  state.count++
}

function App() {
  const snap = useSnapshot(state)

  return (
    <div className="App">
      <h1>valtioチュートリアル</h1>
      <div>
        {snap.count}
        <button onClick={handler_click}>+1</button>
        {snap.text}
      </div>
      <CounterA />
      <AddText />

    </div>
  );
}

export default App;
