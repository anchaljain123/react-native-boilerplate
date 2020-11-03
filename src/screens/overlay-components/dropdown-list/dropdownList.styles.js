import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontFamily } from '../../../styles/style.variables';

const styles = StyleSheet.create({
    dropdownListTitle: {
        marginVertical: 20,
        marginHorizontal: 30,
        fontFamily: fontFamily.SEMI_BOLD,
        color: colors.gray1,
        fontSize: fontSizes.LARGE // SMALL
    },
    dropdownItem: {
        paddingVertical: 15,
        marginHorizontal: 30,
        borderTopColor: colors.neutralUIGray6,
        // borderTopWidth: StyleSheet.hairlineWidth
    },
    borderStyle: {
        // borderBottomWidth: StyleSheet.hairlineWidth
    },
    listItem: {
        fontSize: fontSizes.MEDIUM,
        fontFamily: fontFamily.REGULAR,
        color: colors.gray1
    },
    animatedDropdownWrapper: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        overflow: 'hidden'
    },
    animatedDropdownView: {
        backgroundColor: colors.WHITE
    }
});

export default styles;
