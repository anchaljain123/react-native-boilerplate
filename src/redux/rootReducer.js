import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as loadingReducer } from './common/loader/loader.reducer';
import { reducer as bankReducer } from './common/bank/bank.reducer';

const appReducer = combineReducers({
    form: formReducer,
    loading: loadingReducer,
    // bank: bankReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
