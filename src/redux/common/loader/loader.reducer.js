import { handleActions } from 'redux-actions';
import { actions } from './loader.actions';

const INITIAL_STATE = {
    loader: false,
    backPress: false,
    loaderValue: "normal"
};

export const reducer = handleActions(
    {
        [actions.showLoader](state) {
            return {
                ...state,
                loader: true
            };
        },
        [actions.hideLoader](state) {
            return {
                ...state,
                loader: false
            };
        },
        [actions.backPressDuringApiCall](state, { payload }) {
            return {
                ...state,
                backPress: payload
            };
        },
        [actions.loaderType](state, { payload }) {
            return {
                ...state,
                loaderValue: payload
            };
        }
    },
    INITIAL_STATE
);
