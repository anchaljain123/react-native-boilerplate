/**
 * This is a common loader component.
 */


import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
//Styles.
import styles from './loader.styles';


const Loader = props => {
    return props.loader ? (
        <Text>loader</Text>
    ) : null;
};

const mapStateToProps = state => ({
    loader: state.loading.loader,
    loaderValue: state.loading.loaderValue,
});
export default connect(mapStateToProps)(Loader);
