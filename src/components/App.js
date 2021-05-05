import React, { useState, useReducer } from 'react';

// import bootstrap from 'bootstrap'; とすると、 import の単位が大きすぎて jquery も要求される
// Module not found: Can't resolve 'jquery' in
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from './Event';
import reducer from '../reducers';

const App = (props) => {
    // console.log('render');

    // const [state, dispatch] = useReducer(reducer, initialState, init)
    // 初期化時に行いたい処理はないので、第3引数は無し
    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = (e) => {
        // SPA では画面全体のリロードをしてほしくないので、 onClick のデフォルトの動作を発動させない
        e.preventDefault();
        // console.log('addEvent');
        // console.log({ title, body }); // {title: "aaaaaa", body: "bbbb"}
        dispatch({ type: 'CREATE_EVENT', title, body });
        setTitle('');
        setBody('');
    };

    // Create Event ボタンを押して、 addEvent が呼ばれたら、 state に追加される
    // console.log({ state }); // {state: Array(1)} // 0: {id: 1, title: "aa", body: "bbaa"}

    const deleteAllEvents = (e) => {
        e.preventDefault();
        dispatch({ type: 'DELETE_ALL_EVENTS' });
    };

    return (
        <>
            <div className="container-fluid">
                <h4>Events form</h4>
                <form>
                    <div className="form-group">
                        {/* htmlFor で対応させることで、 Title の文字をクリックしても input がアクティブになる */}
                        <label htmlFor="formEventTitle">Title</label>
                        <input
                            className="form-control"
                            id="formEventTitle"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formEventBody">Body</label>
                        <textarea
                            className="form-control"
                            id="formEventBody"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" onClick={addEvent}>
                        Create Event
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={deleteAllEvents}
                    >
                        Delete All Events
                    </button>
                </form>
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
