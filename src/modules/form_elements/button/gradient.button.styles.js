import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontFamily } from '../../../styles/style.variables';

export default StyleSheet.create({
    btnWrapper: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5,
        elevation: 2
    },
    labelContainer: {
        flex: 1,
        zIndex: 10,
        position: 'absolute',
        top: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnStyle: {
        color: colors.WHITE,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: fontSizes.MEDIUM,
        fontFamily: fontFamily.SEMI_BOLD
    }
});
