import { useState } from 'react';
import './App.css';
import { state } from './App'


function CounterA() {
    const [text, setText] = useState('')

    const handler_click = () => {
        state.text.push(text)
    }

    const add_num1000 = () => {
        state.count += 1000
    }


    return (
        <div className="App" >
            <h1>Add_Textコンポーネントだよ</h1>
            <div>
                <input type="text"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <button onClick={handler_click}>やることを追加</button>
                <div>
                    <button onClick={add_num1000}>もちろんこのコンポーネントからも数字を変更できる</button>
                </div>
            </div>
        </div>
    );
}

export default CounterA;
