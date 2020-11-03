import React, { useState, useEffect } from "react";
import CreateStackNavigator from "./navigation/stackNavigator";
import { connect } from "react-redux";
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { Loader, Error } from "./modules";


const mapStateToProps = (reduxState) => ({

});

const mapDispatchToProps = (dispatch) => ({
});

const App = (props) => {
  const [showErr, setShowErr] = useState(false);
  useEffect(() => {

  }, []);

  console.disableYellowBox = true;

  return (
    <>
      <Loader />
      <CreateStackNavigator />
      <Error
        error={'something went wrong'}
        showErr={showErr}
        handleClose={() => {
          setShowErr(false);
        }}
      />
    </>
  );
};

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
)(App);
