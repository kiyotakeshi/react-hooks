import React, { useReducer } from 'react';

// import bootstrap from 'bootstrap'; とすると、 import の単位が大きすぎて jquery も要求される
// Module not found: Can't resolve 'jquery' in
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Event from './Event';
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
                <h4>All Events</h4>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((event, index) => (
                            // Event component で dispatch を使用するため props として渡す
                            <Event
                                key={index}
                                event={event}
                                dispatch={dispatch}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default App;
