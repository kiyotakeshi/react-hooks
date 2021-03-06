import { CREATE_EVENT, DELETE_ALL_EVENTS, DELETE_EVENT } from '../actions';

const events = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            // console.log('Reducer create event');
            const event = { title: action.title, body: action.body };
            const length = state.length;
            const id = length === 0 ? 1 : state[length - 1].id + 1;
            // id: id なのでショートハンドで書ける
            return [...state, { id, ...event }];
        case DELETE_EVENT:
            // action で渡ってくる id は削除対象のため、等しくないものだけ抽出
            return state.filter((event) => event.id !== action.id);
        case DELETE_ALL_EVENTS:
            return [];
        default:
            return state;
    }
};

export default events;
