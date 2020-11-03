import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, Platform, Keyboard, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './popupLayout.styles';
import noop from 'lodash/noop';
import { View as AnimatableView } from 'react-native-animatable';

const PopupLayout = props => {
    const {
        position,
        isRounded,
        children,
        maxHeight,
        minHeight,
        backgroundPress,
        hasBlackBackground,
        wrapperStyles
    } = props;
    let roundStyle = {};
    let postionStyle = {};
    const stopPropagation = event => event.stopPropagation();
    if (position === 'top') {
        postionStyle = styles.topPostion;
        roundStyle = isRounded && styles.roundedBottom;
    } else {
        postionStyle = styles.bottomPosition;
        roundStyle = isRounded && styles.roundedTop;
    }
    const blackBackgroundStyle = hasBlackBackground ? styles.blackBackground : {};

    const animatableView = useRef();
    useEffect(() => {
        if (Platform.OS === 'ios') {
            const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', event => {
                const {
                    duration,
                    startCoordinates: { height }
                } = event;
                if (animatableView && animatableView.current) {
                    animatableView.current.transitionTo(
                        {
                            marginBottom: height
                        },
                        duration
                    );
                }
            });
            const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', event => {
                const { duration } = event;
                if (animatableView && animatableView.current) {
                    animatableView.current.transitionTo(
                        {
                            marginBottom: 0
                        },
                        duration
                    );
                }
            });

            return () => {
                keyboardWillHideListener.remove();
                keyboardWillShowListener.remove();
            };
        }
    }, []);

    return (
        <AnimatableView ref={animatableView} style={{ flex: 1 }}>
            <TouchableOpacity
                activeOpacity={1}
                style={[styles.popupContainer, postionStyle, blackBackgroundStyle]}
                onPress={backgroundPress}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={stopPropagation}
                    style={[styles.popupContent, roundStyle, { maxHeight, minHeight }, wrapperStyles]}
                >
                    {children}
                    <TouchableOpacity onPress={backgroundPress} style={{
                        position: 'absolute',
                        top: 20,
                        right: 20
                    }}>
                        <Text>close</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </AnimatableView>
    );
};

PopupLayout.propTypes = {
    position: PropTypes.oneOf(['top', 'bottom']),
    isRounded: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
    maxHeight: PropTypes.number,
    backgroundPress: PropTypes.func,
    wrapperStyles: PropTypes.object
};

PopupLayout.defaultProps = {
    position: 'bottom',
    isRounded: true,
    maxHeight: null,
    minHeight: null,
    backgroundPress: noop,
    hasBlackBackground: true,
    wrapperStyles: {}
};

export default PopupLayout;
