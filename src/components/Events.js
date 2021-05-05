import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = () => {
    // Provider に包まれている component では、 context から値を受け取ることが可能
    const { state } = useContext(AppContext);

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
                        <Event key={index} event={event} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Events;
