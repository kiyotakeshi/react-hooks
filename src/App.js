import React, { useState } from 'react';

const App = () => {
    // const output = useState(1000)
    // console.log(output); // [1000, ƒ] // f は関数
    // 要素が二つの配列なので、分割代入する

    const [count, setCount] = useState(0);
    // console.log(count); // 0
    // console.log({count}); // {count: 0}
    // console.log(typeof setCount); // function

    // count の状態が変化することで再描画される
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    // 関数を引数として受け取ることもできる
    const increment2 = () => setCount((previousCount) => previousCount + 1);
    const decrement2 = () => setCount((previousCount) => previousCount - 1);

    const reset = () => setCount(0);

    const double = () => setCount((previousCount) => previousCount * 2);

    const divide3 = () =>
        setCount((previousCount) => {
            //     if (previousCount % 3 === 0) {
            //         return previousCount / 3;
            //     } else {
            //         return previousCount;
            //     }
            return previousCount % 3 === 0 ? previousCount / 3 : previousCount;
        });

    return (
        <>
            <div>count: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>
            <div>
                <button onClick={reset}>reset</button>
                <button onClick={double}>*2</button>
                <button onClick={divide3}>3の倍数の時だけ3で割る</button>
            </div>
        </>
    );
};

export default App;
