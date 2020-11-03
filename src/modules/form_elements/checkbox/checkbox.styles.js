import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontFamily } from '../../../styles/style.variables';

const styles = StyleSheet.create({
    uncheck: {
        borderRadius: 4,
        width: 16,
        height: 16,
        borderColor: '#aeaeae',
        borderWidth: StyleSheet.hairlineWidth,
    },
    circle: {
        height: 18,
        width: 18
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingRight: 15,
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    vertical: {
        flexDirection: 'column'
    },
    radioLabel: {
        fontSize: fontSizes.MEDIUM,
        marginLeft: 12,
        color: colors.neutralUIGray1,
        fontFamily: fontFamily.SEMI_BOLD,
    },
    inputLabel: {
        fontSize: fontSizes.SMALL,
        marginBottom: 10,
        color: colors.neutralUIGray1,
        fontFamily: fontFamily.SEMI_BOLD,
        textTransform: 'uppercase'
    },
    error: {
        color: colors.ERROR,
        marginTop: 3,
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.X_SMALL
    }
});

export default styles;
