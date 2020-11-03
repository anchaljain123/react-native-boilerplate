import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { styles } from './header.style';

const Header = props => {
    const {
        title,
        leftIcon,
        leftLocalIcon,
        leftIconHandler,
        rightIcons,
        rightIconHandler,
        isInverted,
        hideLeftIcon,
        noBorder,
        roundedBorder,
        headerTextStyle,
        headerWrapperStyle,
        children,
        leftIcons
    } = props;
    const invertedStyles = isInverted
        ? {
            invertedTitleText: styles.invertedTitleText,
            invertedWrapper: styles.invertedWrapper
        }
        : {};
    const noButtonTitleStyle = hideLeftIcon ? { marginLeft: 20 } : {};
    const noBorderStyle = noBorder ? styles.noBorder : {};
    const roundedBorderStyle = roundedBorder ? styles.roundedBorder : {};
    return (
        <View
            style={[
                styles.headerWrapper,
                invertedStyles.invertedWrapper,
                noBorderStyle,
                roundedBorderStyle,
                headerWrapperStyle
            ]}
        >
            {
                Boolean(leftIcons) && <TouchableOpacity onPress={leftIconHandler || null} style={styles.iconWrapper}>
                    <View style={{
                        paddingTop: children ? 3 : 0
                    }}>
                        <Text>back</Text>
                    </View>
                </TouchableOpacity>

            }

            {children ? (
                children
            ) : (
                    <Text style={[styles.titleText, noButtonTitleStyle, invertedStyles.invertedTitleText, headerTextStyle]}>
                        {title}
                    </Text>
                )}
            {Boolean(rightIcons) && (
                <TouchableOpacity onPress={rightIconHandler || null} style={styles.iconWrapper}>
                    <View style={styles.rightIcons} />
                </TouchableOpacity>
            )}
        </View>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    leftIcon: PropTypes.string,
    leftIconHandler: PropTypes.func,
    rightIcons: PropTypes.string,
    rightIconHandler: PropTypes.func,
    isInverted: PropTypes.bool,
    hideLeftIcon: PropTypes.bool,
    noBorder: PropTypes.bool,
    roundedBorder: PropTypes.bool,
    leftLocalIcon: PropTypes.number,
    headerTextStyle: PropTypes.object,
    // headerWrapperStyle: PropTypes.object
};

Header.defaultProps = {
    title: 'Merchant',
    leftIconHandler: noop,
    rightIcons: '',
    rightIconHandler: noop,
    isInverted: false,
    leftIcons: true,
    hideLeftIcon: false,
    noBorder: false,
    roundedBorder: false,
    headerTextStyle: {},
    // headerWrapperStyle: {}
};

export default Header;
