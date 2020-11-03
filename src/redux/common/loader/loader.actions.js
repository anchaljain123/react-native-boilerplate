import { createActions } from 'redux-actions';
import noop from 'lodash/noop';

export const actions = createActions({
    SHOW_LOADER: noop,
    HIDE_LOADER: noop,
    LOADER_TYPE: type => type,
    BACK_PRESS_DURING_API_CALL: value => value,
});
