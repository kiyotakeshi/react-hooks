import React, { useState } from 'react';

const App = (props) => {
    // 状態は object でも持てる
    const [state, setState] = useState(props);

    // Now, {state.name} is {state.price} yen. とたびたび state. としているのでリファクタリングする
    const { name, price } = state;

    return (
        <p>
            Now, {name} is {price} yen.
            {/* state を展開して渡す */}
            <button onClick={() => setState({ ...state, price: price + 1 })}>
                +1
            </button>
            <button onClick={() => setState({ ...state, price: price - 1 })}>
                -1
            </button>
            <button onClick={() => setState(props)}>Reset</button>
            <input
                value={name}
                onChange={(e) => {
                    console.log(state); // {name: "aa", price: 1000}
                    return setState({ ...state, name: e.target.value });
                }}
            />
        </p>
    );
};

App.defaultProps = {
    // name: 'Sample',
    name: '',
    price: 1000,
};

export default App;
