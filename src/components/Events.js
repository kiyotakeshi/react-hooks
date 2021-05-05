import React from 'react';

import Event from './Event';

const Events = ({ state, dispatch}) => {
    return (
        <>
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
                        <Event key={index} event={event} dispatch={dispatch} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Events;
