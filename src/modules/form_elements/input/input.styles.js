import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontFamily } from '../../../styles/style.variables';

export const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    },
    labelStyle: {
        fontSize: fontSizes.MEDIUM,
        color: colors.gray2
    },
    inputStyle: {
        fontFamily: fontFamily.SEMI_BOLD, //REGULAR
        padding: 6,
        paddingLeft: 0,
        flex: 1,
        color: colors.BLACK
    },
    error: {
        color: colors.ERROR,
        marginTop: 4,
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.X_SMALL,//X_SMALL
        marginBottom: 3
    },
    errorStyle: {
        borderBottomColor: colors.ERROR
    },
    placeholderStyle: {
        fontFamily: fontFamily.REGULAR,
        color: colors.neutralUIGray6
    },
    iconStyle: {
        width: 36,
        height: 18
    },
    secureStyle: {
        width: 17,
        height: 11
    },
    contactStyle: {
        width: 13,
        height: 14
    },
    wrapperStyling: {
        flexDirection: 'row',
        borderBottomColor: '#aaaaaa',
        borderBottomWidth: StyleSheet.hairlineWidth,
        position: 'relative'
    },
    errorIconStyle: {
        tintColor: colors.ERROR
    },
    iconWrapper: {
        padding: 10,
        paddingLeft: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 2
    },
    clearIcon: {
        height: 12,
        width: 12
    },
    descStyle: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.X_SMALL,
        color: colors.gray4,
        alignSelf: 'flex-end'
    },
    customPlaceholder: {
        position: 'absolute'
    },
    selectedInputStyle: {
        borderBottomColor: colors.disabledGrayText,
        borderBottomWidth: 1
    },
    unSelectedInputStyle: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        color: colors.neutralUIGray6
    },
    hiddenText: {
        position: 'absolute',
        top: -10000,
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSizes.MEDIUM,
    },
    customInput: {
        minWidth: 40,
        padding: 0,
        // fontFamily: fontFamily.SEMI_BOLD, 
        color: colors.BLACK,
        fontSize: fontSizes.MEDIUM,
    }
});
