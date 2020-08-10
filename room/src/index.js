import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

function Room() {
    let [isLit, setLit] = useState(false);
    let [temp, setTemp] = useState(72)
    const [hidden, setHidden] = useState(true)
    const brightness = isLit ? "lit" : "dark";
    if (isLit) {
        console.log("hiding...");
    }
    console.log("shown");
    return (
        <div className={`room ${brightness}`}>
        the room is {isLit ? 'lit' : 'dark'}
        <br/>
        the temp is {temp}
        <br/>
        <button onClick={() => setLit(!isLit)}>
        flip
        </button>
        <div>
        <button onClick={() => setLit(isLit=true)}>
        On
        </button>
        <button onClick={() => setLit(isLit=false)}>
        Off
        </button>
        </div>
        <div>
            <button onClick={() => setTemp(temp+1)}>
            +
            </button>
            <button onClick={() => setTemp(temp-1)}>
            -
            </button>
        </div>
        </div>
    );
}

ReactDOM.render(<Room />, document.getElementById('root'));