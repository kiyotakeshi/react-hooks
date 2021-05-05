import React, { useContext, useState } from 'react';

import {
    CREATE_EVENT,
    DELETE_ALL_EVENTS,
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentISO8601 } from '../utils';

const EventForm = () => {
    // state, dispatch は props の代わりに、 context から参照する
    const { state, dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // console.log(state, ' from EventForm.js');

    const addEvent = (e) => {
        // SPA では画面全体のリロードをしてほしくないので、 onClick のデフォルトの動作を発動させない
        e.preventDefault();
        // console.log('addEvent');
        // console.log({ title, body }); // {title: "aaaaaa", body: "bbbb"}
        dispatch({ type: CREATE_EVENT, title, body });
        dispatch({
            type: ADD_OPERATION_LOG,
            description: 'Created event',
            operatedAt: timeCurrentISO8601(),
        });
        setTitle('');
        setBody('');
    };

    // Create Event ボタンを押して、 addEvent が呼ばれたら、 state に追加される
    // console.log({ state }); // {state: Array(1)} // 0: {id: 1, title: "aa", body: "bbaa"}

    const deleteAllEvents = (e) => {
        e.preventDefault();
        const result = window.confirm('Delete All Events, right?');
        if (result) {
            dispatch({ type: DELETE_ALL_EVENTS });
            dispatch({
                type: ADD_OPERATION_LOG,
                description: 'Deleted all events',
                operatedAt: timeCurrentISO8601(),
            });
        }
    };

    const deleteAllOperationLogs = (e) => {
        e.preventDefault();
        const result = window.confirm('Delete All Operation Logs, right?');
        if (result) {
            dispatch({ type: DELETE_ALL_OPERATION_LOGS });
        }
    };

    const unCreatable = title === '' || body === '';

    return (
        <>
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
                <button
                    className="btn btn-primary"
                    onClick={addEvent}
                    // この true/false を切り替えることでボタンを押せるかを制御する
                    disabled={unCreatable}
                >
                    Create Event
                </button>
                <button
                    className="btn btn-danger"
                    onClick={deleteAllEvents}
                    // event がない場合は押せないようにする
                    disabled={state.events.length === 0}
                >
                    Delete All Events
                </button>
                <button
                    className="btn btn-danger"
                    onClick={deleteAllOperationLogs}
                    disabled={state.operationLogs.length === 0}
                >
                    Delete All Operation Logs
                </button>
            </form>
        </>
    );
};

export default EventForm;
