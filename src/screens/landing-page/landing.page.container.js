import LandingScreen from './landing.page';

import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import { compose } from 'redux';

import { actions as bankActions } from '../../redux/common/bank/bank.actions';
// const {  } = bankActions;

const mapStateToProps = reduxState => ({
    formValues: getFormValues("bankInformationForm")(reduxState) || {},
});

const mapDispatchToProps = dispatch => ({
});
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm({
        form: 'bankInformationForm',
        destroyOnUnmount: false,
        enableReinitialize: false,
        keepDirtyOnReinitialize: true,
    })
)(LandingScreen);
