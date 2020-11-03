import { StyleSheet } from 'react-native';
import { colors } from '../../styles/style.variables';

const styles = StyleSheet.create({
    popupContainer: {
        flex: 1
    },
    blackBackground: {
        backgroundColor: colors.opaqueBlack//opaqueBlack
    },
    topPostion: {
        justifyContent: 'flex-start'
    },
    bottomPosition: {
        justifyContent: 'flex-end'
    },
    popupContent: {
        backgroundColor: colors.WHITE,
        margin: 5
    },
    roundedTop: {
        borderRadius: 12,
        elevation: 1,
        overflow: 'hidden'
    },
    roundedBottom: {
        borderRadius: 12,
        elevation: 1,
        overflow: 'hidden'
    }
});

export default styles;
