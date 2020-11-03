import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontFamily } from '../../styles/style.variables';

export const styles = StyleSheet.create({
    headerWrapper: {
        flexDirection: 'row',
        // alignItems: 'center',
        backgroundColor: colors.WHITE,
        borderBottomColor: colors.LIGHT_GRAY5,
        borderBottomWidth: 1
    },
    noBorder: {
        borderBottomWidth: 0
    },
    roundedBorder: {
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    },
    invertedWrapper: {
        backgroundColor: colors.buttonColor2,
        borderBottomWidth: 0
    },
    iconWrapper: {
        padding: 20,
    },
    titleText: {
        alignSelf:'center',
        fontSize: fontSizes.MEDIUM,
        color: colors.greyLevel1,
        fontFamily: fontFamily.SEMI_BOLD
    },
    invertedTitleText: {
        color: colors.WHITE
    },
    leftIcon: {
        height: 15,
        width: 10
    },
    rightIcon: {
        height: 15,
        width: 10,
        backgroundColor: colors.neutralUIGray1
    }
});
