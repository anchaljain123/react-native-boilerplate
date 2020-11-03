import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity, Dimensions, View, Keyboard } from 'react-native';
import Svg, { LinearGradient, Rect, Defs, Stop } from 'react-native-svg';
import { colors } from '../../../styles/style.variables';
import styles from './gradient.button.styles';

const { width } = Dimensions.get('window');

const LinearGradientBtn = props => {
    const {
        handler,
        btnText,
        width,
        height,
        btnTextStyling,
        disabled,
        btnStyles,
        labelContainerStyle,
        children = null
    } = props;
    const disabledStyle = {
        opacity: btnText === "RECORDING" ? 1 : 0.6,
    }
    return (
        <TouchableOpacity
            style={[styles.btnWrapper, { width }, btnStyles, props.disabled && disabledStyle]}
            onPress={() => {
                Keyboard.dismiss();
                return handler && handler();
            }}
            disabled={disabled}
        >
            {children}
            <Svg width={width} height={height}>
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <Stop offset="0" stopColor={colors.buttonColor1} stopOpacity="1" />
                        <Stop offset="1" stopColor={colors.buttonColor2} stopOpacity="2" />
                    </LinearGradient>
                </Defs>
                <Rect x="0" y="0" width={`${width}`} height={`${height}`} fill="url(#grad)" />
                <View style={[styles.labelContainer, { height, width }, labelContainerStyle]}>
                    <Text style={[styles.btnStyle, btnTextStyling]}>{btnText && btnText.toUpperCase()}</Text>
                </View>
            </Svg>
        </TouchableOpacity>
    );
};

LinearGradientBtn.propTypes = {
    btnText: PropTypes.string.isRequired,
    handler: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
};

LinearGradientBtn.defaultProps = {
    width: width - 60,
    height: 50,
    btnTextStyling: {},
};

export default LinearGradientBtn;
