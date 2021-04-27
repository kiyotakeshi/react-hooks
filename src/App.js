import React, { useState } from 'react';

// const App = () => {

//     const initialStates = {
//         name: '',
//         price: 1000,
//     };

//     const [name, setName] = useState(initialStates.name);
//     const [price, setPrice] = useState(initialStates.price);

//     return (
//         <>
//             <p>
//                 Now, {name} is {price} yen.
//             </p>
//         </>
//     );
// };

const App = (props) => {
    const [name, setName] = useState(props.name);
    const [price, setPrice] = useState(props.price);

    const reset = () => {
        setPrice(props.price);
        setName(props.name);
    };

    return (
        <p>
            Now, {name} is {price} yen.
            <button onClick={() => setPrice(price + 1)}>+1</button>
            <button onClick={() => setPrice(price - 1)}>-1</button>
            <button onClick={reset}>Reset</button>
            {/* 入力時のイベントを拾う */}
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </p>
    );
};

App.defaultProps = {
    // name: 'Sample',
    name: '',
    price: 1000,
};

export default App;
