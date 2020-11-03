import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/style.variables';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.opaqueBlack,
        position: 'absolute',
        zIndex: 999,
        top: 0,
        left: 0,
        height,
        width
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    loadingText:{
        textAlign:"center",
        color:colors.WHITE, 
        fontWeight:'500',
        lineHeight:20, 
        marginTop:16
    },
    loadingTextContainer:{
        justifyContent:'center',
        alignItems:'center'
    }
});

export default styles;
