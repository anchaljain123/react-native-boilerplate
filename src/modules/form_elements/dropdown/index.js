import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './dropdown.styles';


const Dropdown = props => {
    const {
        options,
        input: { value, onChange, name },
        containerStyle,
        activeDropDown,
        setActive,
        label,
        showLabel,
        placeholder,
        navigation,
        valueField,
        labelField,
        listTitle,
        isTop,
        showListHeader,
        lableComponent,
        labelStyle,
        isTopWithHeader,
        headerComponent,
        meta: { touched, error, warning },
        errorHidden,
        handleChange,
        wrapperStyle,
        isEllipses
    } = props;
    const maxLimit = 12;
    const getDropdownvalue = value => {
        const valueObject = options.find(option => option[valueField] === value);
        return valueObject[labelField];
    };
    const dropDownValue = value ? getDropdownvalue(value) : placeholder;
    const inputValueStyle = value ? styles.inputStyle : styles.placeholder;
    const dropdownListTitle = listTitle || label;
    const [warn, showWarn] = useState(true);

    const openList = () => {
        navigation.push('DropdownList', {
            options,
            onChange,
            valueField,
            setActive,
            labelField,
            dropdownListTitle,
            showListHeader,
            topAnimation: isTop,
            // offsetTop: 57,
            handleChange,
            showWarn,
            name
        });
    };

    const getActiveStyles = () => {
        if ((activeDropDown === 3 && label === "Occupation") || (activeDropDown === 4 && label === "Source of income")) {
            return styles.selectedDropdownStyle;
        } else {
            return null;
        }
    }

    const _renderLable = () => {
        if (lableComponent) {
            //If we need custom lable component pass a rendering callback which will recieve current value.
            return lableComponent(dropDownValue, openList);
        }
        return (
            <TouchableOpacity onPress={openList} style={[styles.wrapperStyling, wrapperStyle, getActiveStyles()]}>
                <Text style={inputValueStyle}>
                    {isEllipses ? (dropDownValue && dropDownValue.length > maxLimit ? dropDownValue.substring(0, maxLimit - 3) + '...' : dropDownValue) : dropDownValue}</Text>

            </TouchableOpacity>
        );
    };
    const getErrorMessage = () => {
        if (warning && warn) { //server error
            return warning
        }
        if (error) { //frontend error
            return error
        }
        return '';
    }
    return (
        <View style={containerStyle}>
            {showLabel && <Text style={[styles.inputLabel, labelStyle]}>{label}</Text>}
            {_renderLable()}
            {!errorHidden && <Text style={styles.error}>{getErrorMessage()}</Text>}
        </View>
    );
};

Dropdown.propTypes = {
    navigation: PropTypes.object.isRequired,
    options: PropTypes.array,
    showLabel: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    containerStyle: PropTypes.object,
    labelField: PropTypes.string,
    valueField: PropTypes.string,
    listTitle: PropTypes.string,
    lableComponent: PropTypes.func,
    isTopWithHeader: PropTypes.bool,
    headerComponent: PropTypes.func,
    handleChange: PropTypes.func,
    errorHidden: PropTypes.bool,

};

Dropdown.defaultProps = {
    labelField: 'label',
    valueField: 'value',
    isTop: false,
    label: '',
    listTitle: '',
    showListHeader: true,
    isEllipses: true,
    errorHidden: false,
    handleChange: () => { }
};

export default Dropdown;
