import { combineReducers } from 'redux';

import events from './events';
import operationLogs from './operation-logs';

export default combineReducers({ events, operationLogs });
