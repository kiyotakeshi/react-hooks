const events = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            console.log('Reducer create event');
            const event = { title: action.title, body: action.body };
            const length = state.length;
            const id = length === 0 ? 1 : this.state[length - 1].id + 1;
            // id: id なのでショートハンドで書ける
            return [...state, { id, ...event }];
        // TODO:
        case 'DELETE_EVENT':
            return state;
        case 'DELETE_ALL_EVENTS':
            return [];
        default:
            return state;
    }
};

export default events;
