import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, ScrollView, Dimensions, View, Animated, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { PopupLayout } from '../../../layouts';

import styles from './dropdownList.styles';

import { useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';

const { height } = Dimensions.get('window');
const DropdownList = props => {
    let reduxFormValues = useSelector(state => getFormValues('bankInformationForm')(state));
    const { navigation, route } = props;
    const {
        options,
        onChange,
        valueField,
        labelField,
        dropdownListTitle,
        topAnimation,
        dropdownHeightRatio,
        showListHeader,
        headerComponent,
        isTopWithHeader,
        listItemStyle,
        listParentStyle,
        handleChange,
        setActive,
        showWarn, //disable server error
        name = null
    } = route && route.params;

    const [viewHeight] = useState(new Animated.Value(0));
    const calculatedDropDownHeight = dropdownHeightRatio ? height * dropdownHeightRatio : (height * 2) / 6;
    const position = topAnimation ? 'top' : 'bottom';

    const selectItem = (option, index) => {
        handleChange(index);
        showWarn(false);
        delete reduxFormValues.initalErrors[name]
        if (isTopWithHeader && headerComponent) {
            onChange(option[valueField]);
            Animated.timing(viewHeight, {
                toValue: 0,
                duration: 300
            }).start(() => {
                navigation.pop();
            });
        } else {
            onChange(option[valueField]);
            navigation.pop();
        }
        try {
            setActive();
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        if (isTopWithHeader && headerComponent) {
            Animated.timing(viewHeight, {
                toValue: calculatedDropDownHeight,
                duration: 600
            }).start();
        }
        return function () {
            Animated.timing(viewHeight).stop();
        };
    }, []);

    return (
        <PopupLayout
            position={position}
            minHeight={calculatedDropDownHeight}
            maxHeight={calculatedDropDownHeight}
            backgroundPress={() => navigation.pop()}
        >
            {showListHeader && <Text style={styles.dropdownListTitle}>{dropdownListTitle}</Text>}
            <ScrollView showsVerticalScrollIndicator={false} >
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => selectItem(option, index)}
                        style={[styles.dropdownItem, listParentStyle, index === options.length - 1 ? { borderBottomWidth: 0 } : styles.borderStyle]}
                    >
                        <Text style={[styles.listItem, listItemStyle]}>{option[labelField]}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            {/* <FlatList
                    data={options}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => selectItem(item, index)}
                            style={[styles.dropdownItem, listParentStyle]}
                        >
                            <Text style={[styles.listItem, listItemStyle]}>{item[labelField]}</Text>
                        </TouchableOpacity>
                    )}
                /> */}
        </PopupLayout>
    );
};

DropdownList.propTypes = {
    navigation: PropTypes.object
};

export default DropdownList;
