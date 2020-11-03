import React, { useEffect, useState, useRef, useCallback } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, Text, BackHandler, TouchableOpacity } from 'react-native';
import { Header } from '../../modules'
import { styles } from '../../styles/global.styles';
import { colors } from '../../styles/style.variables';
import { required, validateEmail } from "../../utilities/constants";
import { Field } from "redux-form";
import { usePoll } from '../../hooks';
import { useFocusEffect } from '@react-navigation/native';

const LandingScreen = props => {
    const { navigation } = props;
    const handleBack = () => {
        navigation.pop()
    }
    return <View style={styles.videoContainer}>
        <Header headerWrapperStyle={styles.header} noBorder leftIconHandler={() => handleBack()} title={'Landing'} />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{
                    backgroundColor: colors.WHITE,
                    marginVertical: 10,
                    borderRadius: 26,
                }}
            >
            </View>
        </KeyboardAwareScrollView>
    </View>
}

export default LandingScreen;