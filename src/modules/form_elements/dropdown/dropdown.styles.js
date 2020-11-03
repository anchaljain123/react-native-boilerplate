import { StyleSheet } from 'react-native';
import { colors, fontFamily, fontSizes } from '../../../styles/style.variables';

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: fontSizes.SMALL,
        // marginBottom: 10,
        color: colors.neutralUIGray1,
        fontFamily: fontFamily.SEMI_BOLD,
        // textTransform: 'uppercase'
    },
    wrapperStyling: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors.neutralUIGray6,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 6
    },
    selectedDropdownStyle:{
        borderBottomColor: colors.disabledGrayText,
        borderBottomWidth:1
    },
    placeholder: {
        fontSize: fontSizes.SMALL,
        fontFamily: fontFamily.REGULAR,
        color: colors.neutralUIGray6
    },
    inputStyle: {
        fontSize: fontSizes.MEDIUM,
        // fontFamily: fontFamily.REGULAR,
        // color: colors.neutralUIGray1,
        fontFamily: fontFamily.SEMI_BOLD,
        color: colors.greyLevel1,
    },
    error: {
        color: colors.ERROR,
        marginTop: 3,
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.X_SMALL,
        marginBottom: 3
    }
});

export default styles;
