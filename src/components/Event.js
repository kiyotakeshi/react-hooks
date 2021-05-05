import React, { useContext } from 'react';

import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentISO8601 } from '../utils';

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext);
    const id = event.id;
    const handleClickDeleteButton = () => {
        const result = window.confirm(`Delete event(id=${id}), right?`);
        if (result) {
            dispatch({ type: DELETE_EVENT, id: id });

            dispatch({
                type: ADD_OPERATION_LOG,
                description: `Delete event(id=${id})`,
                operatedAt: timeCurrentISO8601(),
            });
        }
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
