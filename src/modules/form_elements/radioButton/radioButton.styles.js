import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontFamily } from '../../../styles/style.variables';

const styles = StyleSheet.create({
    circle: {
        height: 18,
        width: 18
    },
    radioWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingRight: 30,
        paddingTop:10
    },
    horizontal: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    vertical: {
        flexDirection: 'column'
    },
    radioLabel: {
        fontSize: fontSizes.MEDIUM,
        marginLeft: 10,
        color: colors.neutralUIGray1,
        fontFamily: fontFamily.SEMI_BOLD,
    },
    inputLabel: {
        fontSize: fontSizes.SMALL,
        marginBottom: 10,
        color: colors.neutralUIGray1,
        fontFamily: fontFamily.SEMI_BOLD,
        // textTransform: 'uppercase'
    },
    uncheck: {
        borderRadius: 8,
        width: 16,
        height: 16,
        borderColor: '#aeaeae',
        borderWidth: 1,
    },
    radioCicle: {
        borderRadius: 9,
        width: 18,
        height: 18,
        borderColor: '#f36f40',
        borderWidth: 1,
        // padding: 4,
        position: 'relative'
    },
    check: {
        borderRadius: 9,
        width: 18,
        height: 18,
        borderColor: '#f36f40',
        borderWidth: StyleSheet.hairlineWidth,
    },
    innerCircle: {
        height: 9,
        width: 9,
        borderRadius: 4.5,
        overflow: 'hidden', //give with borderRadius,
        backgroundColor: '#f36f40',
        position: 'absolute',
        top: 3.5,
        left: 3.5,
    },
    error: {
        color: colors.ERROR,
        marginTop: 4,
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.X_SMALL,//X_SMALL
        marginBottom: 3
    },
});

export default styles;
