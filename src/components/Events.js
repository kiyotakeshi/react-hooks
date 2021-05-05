import React, { useContext } from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = ({ state, dispatch }) => {
    // Provider に包まれている component では、 context から値を受け取ることが可能
    const value = useContext(AppContext);

    return (
        <>
            {/* hooks を使用する */}
            <h4>{value}</h4>

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
                        // App.js => Events.js => Event.js を props を渡していくため、大規模化していくと、
                        // Prop Drilling 問題(バケツリレー式に prop を使用して component に state を渡していくこと) にぶち当たる
                        // 状態管理のために Redux などを使用することで対策する
                        // Hooks の登場以降は、 useContext を使用することでも実現可能
                        <Event key={index} event={event} dispatch={dispatch} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Events;
