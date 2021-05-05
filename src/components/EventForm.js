import React, { useState } from 'react';

// props を介して同じ state を扱えるようになった
// <EventForm state={state} dispatch={dispatch} />
const EventForm = ({ state, dispatch }) => {
    // App.js と別物の state で初期化した reducer を使わない
    // const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // console.log(state, ' from EventForm.js');

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
        const result = window.confirm('Delete All Events, right?');
        if (result) {
            dispatch({ type: 'DELETE_ALL_EVENTS' });
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
                    disabled={state.length === 0}
                >
                    Delete All Events
                </button>
            </form>
        </>
    );
};

export default EventForm;
