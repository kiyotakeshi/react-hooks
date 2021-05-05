import React, { useReducer } from 'react';

// import bootstrap from 'bootstrap'; とすると、 import の単位が大きすぎて jquery も要求される
// Module not found: Can't resolve 'jquery' in
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const App = (props) => {
    const initialState = { events: [] };
    const [state, dispatch] = useReducer(reducer, initialState);
    // console.log(state, ' from App.js');

    return (
        // @see https://ja.reactjs.org/docs/context.html#contextprovider
        <AppContext.Provider value={{ state, dispatch }}>
            <div className="container-fluid">
                <EventForm />
                <Events />
            </div>
        </AppContext.Provider>
    );
};

export default App;
