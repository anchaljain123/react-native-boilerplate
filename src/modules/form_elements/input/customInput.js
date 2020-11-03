import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';
import { noop } from 'lodash';
import { colors, fontSizes } from '../../../styles/style.variables';
import { styles } from './input.styles';


import * as Animatable from 'react-native-animatable';

// eslint-disable-next-line complexity
export const CustomInput = props => {
    const {
        label,
        name,
        inputStyle,
        labelStyle,
        input,
        meta: { touched, error, warning },
        placeholder,
        editable = true,
        showError,
        showValue,
        showClear,
        showTextRight,
        rightTextString,
        rightTextContainer,
        propsIconStyles,
        propsLocalImage,
        placeholderTextColor,
        extraDesc,
        wrapperStyling,
        errorCustomStyle,
        autoFocus,
        isAnimated,
        hasLabel,
        onFocusField,
        testIdLocator,
        handleChange,
        activeInput,
        setActive,
        showIcon,
        iconContainer,
        leftContainer,
        showLeft,
        ...inputProps
    } = props;

    let inputNode = null;
    let placeholderNode = null;
    const fieldArray = ["fatherName", "proofIdNumber", "motherName", "nomineeName",
        "relationship", "guardianName", "guardianRelation"]

    useEffect(() => {
        if (autoFocus && props.inputRef) {
            props.inputRef.current.focus();
        }
    }, [autoFocus]);
    /**
     * This is a work around.
     * Textinput is from state not from redux form direct value.
     * Known issue link for react-native versions <0.54:
     * https://github.com/facebook/react-native/issues/20119
     */
    const [inputvalue, setInput] = useState('');
    const [activeError, setActiveError] = useState(false);
    const [warn, showWarn] = useState(true);

    //For first time load
    useEffect(() => {
        setInput(input.value);

    }, []);

    //For async value initialization
    useEffect(() => {
        setInput(input.value);
        if (fieldArray.indexOf(props.input.name) === -1) {
            setActiveError(false)
        }

    }, [input.value]);

    const hasError = (
        fieldArray.indexOf(props.input.name) !== -1
    ) ? error : touched && error;

    const errorStyling = hasError && activeError ? styles.errorStyle : {};
    const placholderProps = isAnimated ? {} : { placeholder };
    const placeholderLeftMargin = 6;
    const paddingStyle = isAnimated ? { paddingTop: 20 } : {};
    const defaultPlaceholderStyle = !inputvalue ? { bottom: 6, left: placeholderLeftMargin } : { bottom: 33, left: 0 };

    const _onFocus = () => {
        onFocusField();
        showWarn(false); //disable server error
        if (placeholderNode && isAnimated) {
            placeholderNode.transitionTo({
                bottom: 33,
                left: 0,
                fontSize: fontSizes.X_SMALL + 1
            });
        }
        if (input.onFocus) {
            props.input.onFocus();
        }
    };

    const _onBlur = () => {
        if (inputvalue === "") {
            setActiveError(true)
        }
        setActiveError(true);
        if (!inputvalue && placeholderNode && isAnimated) {
            placeholderNode.transitionTo({
                ...defaultPlaceholderStyle,
                fontSize: fontSizes.SMALL
            });
        }
        if (input.onBlur) {
            props.input.onBlur();
        }
    };

    useEffect(() => {
        if (inputvalue && placeholderNode && isAnimated) {
            placeholderNode.transitionTo({
                bottom: 33,
                left: 0,
                fontSize: fontSizes.X_SMALL + 1
            });
        }
    }, [inputvalue, isAnimated]);

    const getActiveInputStyles = () => {
        if (props.activeInput === 0 && props.input.name === "ifscCode"
            || props.activeInput === 1 && props.input.name === "accountNumber"
            || props.activeInput === 2 && props.input.name === "ReAccountNumber"
        ) {
            return styles.selectedInputStyle;
        } else {
            return styles.unSelectedInputStyle;
        }
    }
    /**
     * getErrorMessage
     * redux form warning is used as backend error
     * redux form error is used as frontend error
     */
    const getErrorMessage = () => {
        if (warning && warn) { //server error
            return warning
        }
        if (hasError && activeError) { //frontend error
            return error
        }
        return '';
    }
    return (
        <View style={[styles.containerStyle, props.containerStyle, paddingStyle]}>
            {hasLabel && <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        if (props.inputRef) {
                            props.inputRef.current.focus();
                        }
                    }}
                    style={[styles.wrapperStyling, errorStyling, getActiveInputStyles(), wrapperStyling]}>
                    {isAnimated && (
                        <Animatable.Text
                            ref={node => (placeholderNode = node)}
                            duration={150}
                            accessible
                            testID={testIdLocator}
                            accessibilityLabel={Platform.select({ android: testIdLocator })}
                            style={[styles.placeholderStyle, styles.customPlaceholder, defaultPlaceholderStyle]}
                        >
                            {placeholder}
                        </Animatable.Text>
                    )}
                    {showLeft && leftContainer}
                    <TextInput
                        {...inputProps}
                        {...placholderProps}
                        style={styles.customInput}
                        onChangeText={value => {
                            if (fieldArray.indexOf(props.input.name) !== -1) {
                                setActiveError(true);
                            }

                            handleChange && handleChange(value);
                            setInput(() => {
                                input.onChange(value);
                                return value;
                            });
                        }}
                        onBlur={_onBlur}
                        onFocus={_onFocus}
                        ref={props.inputRef}
                        editable={editable}
                        placeholderTextColor={placeholderTextColor || colors.gray2}
                        onSubmitEditing={props.onSubmitEditing || null}
                        selectionColor={colors.neutralUIOrange}
                        placeholderStyle={styles.placeholderStyle}
                        value={showValue ? inputvalue : null}
                    />
                    {showIcon && iconContainer}
                </TouchableOpacity>
                {rightTextContainer}
            </View>
            {extraDesc ? <Text style={styles.descStyle}>{extraDesc}</Text> : null}
            {showError &&
                <Text style={[styles.error, errorCustomStyle]}>
                    {getErrorMessage()}
                </Text>
            }
        </View>
    );
};

CustomInput.propTypes = {
    showLabel: PropTypes.bool,
    showTextRight: PropTypes.bool,
    showValue: PropTypes.bool,
    label: PropTypes.string,
    inputStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    otherProps: PropTypes.object,
    showError: PropTypes.bool,
    contactSelect: PropTypes.bool,
    contactSelectCallback: PropTypes.func,
    showClear: PropTypes.bool,
    errorCustomStyle: PropTypes.object,
    autoFocus: PropTypes.bool,
    isAnimated: PropTypes.bool,
    hasLabel: PropTypes.bool,
    rightButtonImageStyle: PropTypes.object,
    onFocusField: PropTypes.func,
    testIdLocator: PropTypes.string
};

CustomInput.defaultProps = {
    showClear: false,
    showLabel: false,
    showTextRight: false,
    showValue: false,
    showIcon: false,
    showLeft: false,
    label: '',
    inputStyle: {},
    labelStyle: {},
    otherProps: {
        secureTextEntry: false,
        placeholderTextColor: ''
    },
    showError: true,
    errorCustomStyle: {},
    autoFocus: false,
    isAnimated: true,
    hasLabel: false,
    rightButtonImageStyle: {},
    onFocusField: noop,
    testIdLocator: ''
};
