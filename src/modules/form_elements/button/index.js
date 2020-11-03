import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors, fontSizes, getSpacing, FACTORS, fontFamily } from '../../../styles/style.variables';

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.neutralUIOrange,
        padding: getSpacing(FACTORS.X_SMALL),
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    text: {
        color: colors.WHITE,
        textAlign: 'center',
        fontSize: fontSizes.MEDIUM,
        fontFamily: fontFamily.REGULAR
    },
    invertedButtonStyle: {
        backgroundColor: colors.WHITE,
        borderColor: colors.neutralUIOrange,
        borderWidth: 1,
        elevation: 0
    },
    invertedTextStyle: {
        color: colors.neutralUIOrange
    },
    disabledButtonStyle: {
        backgroundColor: colors.opaqueBlackLight,
        borderColor: colors.disabledGrayBorder
    },
    disabledTextStyle: {
        color: colors.disabledGrayText
    }
});
const Button = props => {
    const { handler, text, textStyle, buttonStyle, isRounded, disabled, isInverted, testID } = props;
    const roundStyle = isRounded ? { borderRadius: 5, overflow: 'hidden' } : {};
    const invertedButtonStyle = isInverted ? styles.invertedButtonStyle : {};
    const invertedButtonText = isInverted ? styles.invertedTextStyle : {};
    const disabledButtonStyle = disabled ? styles.disabledButtonStyle : {};
    const disabledButtonText = disabled ? styles.disabledTextStyle : {};

    return (
        <TouchableOpacity
            accessible
            testID={testID}
            accessibilityLabel={Platform.select({ android: testID })}
            disabled={disabled}
            style={[styles.button, roundStyle, invertedButtonStyle, buttonStyle]}
            onPress={handler}
        >
            <Text style={[styles.text, invertedButtonText, textStyle]}>
                {text && text.toUpperCase()}
            </Text>
        </TouchableOpacity>
    );
};
Button.propTypes = {
    isRounded: PropTypes.bool,
    text: PropTypes.string,
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    handler: PropTypes.func,
    isInverted: PropTypes.bool
};

Button.defaultProps = {
    isRounded: false,
    isInverted: false,
    text: '',
    textStyle: {},
    buttonStyle: {},
    handler: function handler() {
        //Do nothing
    },
    disabled: false
};

export default Button;