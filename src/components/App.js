import React, { useReducer } from 'react';

// import bootstrap from 'bootstrap'; とすると、 import の単位が大きすぎて jquery も要求される
// Module not found: Can't resolve 'jquery' in
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import reducer from '../reducers';

const App = (props) => {
    // const [state, dispatch] = useReducer(reducer, initialState, init)
    // 初期化時に行いたい処理はないので、第3引数は無し
    const [state, dispatch] = useReducer(reducer, []);
    // console.log(state, ' from App.js');

    return (
        <>
            <div className="container-fluid">
                <EventForm state={state} dispatch={dispatch} />
                <Events state={state} dispatch={dispatch} />
            </div>
        </>
    );
};

export default App;
