import React from 'react';

// event が props として渡ってくる
const Event = ({ dispatch, event }) => {
    const id = event.id;
    const handleClickDeleteButton = () => {
        dispatch({
            type: 'DELETE_EVENT',
            id: id,
        });
    };
    return (
        // <tr key={index}> // map で配列の要素分、 Event component を作成する際に、 key を指定しているのでこちらでは不要
        <tr>
            <td>{id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleClickDeleteButton}
                >
                    削除
                </button>
            </td>
        </tr>
    );
};

export default Event;
