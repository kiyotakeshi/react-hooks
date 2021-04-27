import React, { useEffect, useState } from 'react';

const App = (props) => {
    // 状態は object でも持てる
    const [state, setState] = useState(props);

    // Now, {state.name} is {state.price} yen. とたびたび state. としているのでリファクタリングする
    const { name, price } = state;

    // componentDidMount(DOM が最初に描画される時), componentDidUpdate(DOM の中の要素のどこかが変更された時に呼ばれる) のタイミングで発火
    // useEffect(() => {
    //     // useEffect は rendering の後で実行されている( renderHello が先に実行されている)
    //     console.log('useEffect is invoked');
    // });

    // componentDidMount のタイミングで発火
    useEffect(() => {
        console.log('This is like componentDidMount');
    }, []);

    // 特定の state が変更された時に発火
    useEffect(() => {
        console.log('This callback is for name only');
    }, [name]);

    // const renderHello = () => {
    //     console.log('render hello');
    //     return 'hello';
    // };

    return (
        <>
            {/* <p>{renderHello()}</p> */}
            <p>
                Now, {name} is {price} yen.
                {/* state を展開して渡す */}
                <button
                    onClick={() => setState({ ...state, price: price + 1 })}
                >
                    +1
                </button>
                <button
                    onClick={() => setState({ ...state, price: price - 1 })}
                >
                    -1
                </button>
                <button onClick={() => setState(props)}>Reset</button>
                <input
                    value={name}
                    onChange={(e) => {
                        // console.log(state); // {name: "aa", price: 1000}
                        return setState({ ...state, name: e.target.value });
                    }}
                />
            </p>
        </>
    );
};

App.defaultProps = {
    // name: 'Sample',
    name: '',
    price: 1000,
};

export default App;
