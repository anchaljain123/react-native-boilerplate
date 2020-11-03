import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import styles from './checkbox.styles';
import PropTypes from 'prop-types';

const Checkbox = props => {
    const { checked, onChange, value, label, values, optionLabelStyle, isChild, testLabelLocator, showWarn } = props;
    const handlePress = () => {
        showWarn(false);
        const checked = values.includes(value);
        const arr = [...values];
        if (checked) {
            arr.splice(arr.indexOf(value), 1);
        } else {
            arr.push(value);
        }
        onChange(arr);
    };
    return (
        <TouchableOpacity style={styles.radioWrapper} onPress={handlePress}>
            {checked ?
                <View style={styles.uncheck} /> //chk
                :
                <View style={styles.uncheck} />
            }
            {isChild ? (
                <View>{label}</View>
            ) : (
                    <Text
                        accessible
                        testID={testLabelLocator}
                        accessibilityLabel={Platform.select({ android: testLabelLocator })}
                        style={[styles.radioLabel, optionLabelStyle, checked && props.selectedChkStyle]}
                    >
                        {label}
                    </Text>
                )}
        </TouchableOpacity>
    );
};

const CheckBoxSet = props => {
    const {
        options,
        input: { value, onChange, name },
        arrange,
        containerStyle,
        wrapperStyle,
        label,
        showLabel,
        labelStyle,
        optionLabelStyle,
        scrollToEnd,
        isChild,
        meta: { touched, error, warning },
        showError,
        selectedChkStyle
    } = props;
    const radioSetWrapperStyle = styles[arrange];
    const hasError = touched && error;
    const [warn, showWarn] = useState(true);
    const getActivecheckBox = () => {
        if (name === "permanentAddressIsCorrespondenceAddress" || name === "nominee") {
            props.setActive();
        }
    }
    const getErrorMessage = () => {
        if (warning && warn) { //server error
            return warning
        }
        if (hasError) { //frontend error
            return error
        }
        return '';
    }
    return (
        <View>
            <View style={[containerStyle, wrapperStyle]}>
                {showLabel ? <Text style={[styles.inputLabel, labelStyle]}>{label}</Text> : null}
                <View style={radioSetWrapperStyle}>
                    {options.map((option, index) => (
                        <Checkbox
                            checked={value.indexOf(option.value) !== -1}
                            key={index}
                            onChange={onChange}
                            values={value} //current state in redux
                            {...option}
                            onPress={
                                () => { getActivecheckBox() }
                            }
                            optionLabelStyle={optionLabelStyle}
                            isChild={isChild}
                            selectedChkStyle={selectedChkStyle}
                            showWarn={showWarn}
                        />
                    ))}
                </View>
            </View>
            {showError && <Text style={styles.error}>
                {getErrorMessage()}
            </Text>}
        </View>
    );
};

CheckBoxSet.defaultProps = {
    arrange: 'vertical', //Vertical || horizontal
    showLabel: true,
    labelStyle: {},
    optionLabelStyle: {},
    containerStyle: {},
    wrapperStyle: {},
    isChild: false,
    showError: false,
    meta: {},
    testLabelLocator: ''
};

CheckBoxSet.propTypes = {
    arrange: PropTypes.oneOf(['vertical', 'horizontal']),
    options: PropTypes.array.isRequired,
    showLabel: PropTypes.bool,
    isChild: PropTypes.bool,
    labelStyle: PropTypes.object,
    optionLabelStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    showError: PropTypes.bool,
    testLabelLocator: PropTypes.string
};

export default CheckBoxSet;
