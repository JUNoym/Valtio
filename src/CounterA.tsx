import './App.css';
import { state } from './App'
import { useSnapshot } from 'valtio'



const handler_click = () => {
    state.count += 10
}

function CounterA() {
    const snap = useSnapshot(state)
    return (
        <div className="App">
            <h1>CounterAコンポーネントだよ</h1>
            <div>
                {snap.count}
                <button onClick={handler_click}>+10</button>
            </div>
        </div>
    );
}

export default CounterA;
