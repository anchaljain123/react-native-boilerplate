import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './radioButton.styles';
import PropTypes from 'prop-types';

const Radio = props => {
    const { checked, label, showWarn } = props;
    const handlePress = () => props.onChange(props.value);
    return (
        <TouchableOpacity style={[styles.radioWrapper, props.radioWrapperStyle]} onPress={() => {
            handlePress();
            showWarn(false);
        }}>
            {checked ?
                <View style={styles.radioCicle}>
                    <View style={styles.innerCircle} />
                </View>
                :
                <View style={styles.uncheck} />
            }
            <Text style={[styles.radioLabel, props.textStyle, checked && props.radioSelectedStyle]}>{label}</Text>
        </TouchableOpacity>
    );
};

const RadioSet = props => {
    const [warn, showWarn] = useState(true);

    const {
        options,
        input: { value, onChange },
        arrange,
        containerStyle,
        label,
        showLabel,
        labelStyle,
        radioWrapperStyle,
        radioSetWrapperStyles,
        textStyle,
        radioSelectedStyle,
        meta: { touched, error, warning },
    } = props;
    const radioSetWrapperStyle = styles[arrange];
    return (
        <View style={containerStyle}>
            {showLabel ? <Text style={[styles.inputLabel, labelStyle]}>{label}</Text> : null}
            <View style={[radioSetWrapperStyle, radioSetWrapperStyles]}>
                {options.map(radio => (
                    <Radio key={radio.label} {...radio}
                        onChange={onChange}
                        checked={radio.value === value}
                        radioWrapperStyle={radioWrapperStyle}
                        textStyle={textStyle}
                        radioSelectedStyle={radioSelectedStyle}
                        showWarn={showWarn}
                    />
                ))}
            </View>
            {
                warn && warning &&
                <Text style={[styles.error]}>
                    {warning}
                </Text>
            }
        </View>
    );
};

RadioSet.defaultProps = {
    arrange: 'vertical',
    showLabel: true,
    labelStyle: {}
};

RadioSet.propTypes = {
    arrange: PropTypes.oneOf(['vertical', 'horizontal']),
    options: PropTypes.array.isRequired,
    showLabel: PropTypes.bool,
    labelStyle: PropTypes.object
};

export default RadioSet;
