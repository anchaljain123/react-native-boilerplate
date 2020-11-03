import { StyleSheet, Dimensions } from 'react-native';
import { colors, fontSizes, fontFamily } from './style.variables';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    circleWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgWrapper: {
        zIndex: 99,
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    radiolabelStyle: {
        fontSize: fontSizes.MEDIUM,
        color: colors.disabledGrayText,
        fontFamily: fontFamily.REGULAR,
        marginBottom: 0
    },
    addressStyle: {
        fontSize: fontSizes.MEDIUM,
        color: colors.gray3,
        fontFamily: fontFamily.REGULAR,
        marginBottom: 20,
        marginTop: 8,
        flex: 1,
        flexDirection: 'row'
    },
    bankLabelStyle: {
        fontSize: fontSizes.SMALLEST,
        color: colors.disabledGrayText,
        fontFamily: fontFamily.SEMI_BOLD,
        marginBottom: 0
    },
    radioSelectedStyle: {
        fontSize: fontSizes.MEDIUM,
        color: colors.greyLevel1,
        fontFamily: fontFamily.SEMI_BOLD,
    },
    timerStyle: {
        fontSize: fontSizes.MEDIUM,
        color: colors.BLACK,
        fontFamily: fontFamily.SEMI_BOLD
    },
    logoStyle: {
        fontSize: fontSizes.SMALL,
        color: colors.BLACK,
        fontFamily: fontFamily.REGULAR,
        paddingTop: 7
    },
    timerStyle: {
        fontSize: fontSizes.MEDIUM,
        color: colors.BLACK,
        fontFamily: fontFamily.SEMI_BOLD,
    },
    tipStyle: {
        fontSize: fontSizes.MEDIUM,
        color: colors.WHITE,
        fontFamily: fontFamily.SEMI_BOLD,
        marginVertical: 10,
        marginTop: 5
    },
    checkboxStyle: { borderRadius: 0, color: '#666666', fontSize: fontSizes.SMALL },
    currentText: {
        textAlign: 'center',
        color: 'white',
        fontSize: fontSizes.X_SMALL,
        fontFamily: fontFamily.SEMI_BOLD,
    },
    currentCircle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f69a79',
        borderRadius: 12,
        paddingRight: 6
    },
    uncheckText: {
        color: '#f36f40',
        textAlign: 'center',
        fontSize: fontSizes.X_SMALL,
        fontFamily: fontFamily.SEMI_BOLD
    },
    circle: {
        width: 24,
        height: 24,
        marginRight: 2,
        borderRadius: 24 / 2,
        backgroundColor: '#f36f40',
        alignItems: 'center',
        justifyContent: 'center',
    },
    uncheckCircle: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        backgroundColor: '#fff',
        borderColor: '#f36f40',
        borderWidth: StyleSheet.hairlineWidth,
        marginLeft: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: fontSizes.LARGEST,//LARGER
        color: colors.greyLevel1,
        fontFamily: fontFamily.BOLD,
    },
    otpText: {
        fontSize: fontSizes.X_LARGE,//LARGER
        color: colors.greyLevel1,
        fontFamily: fontFamily.BOLD,
        textAlign: 'center'
    },
    titleTextStyle: {
        fontSize: fontSizes.LARGE,
        color: colors.greyLevel1,
        fontFamily: fontFamily.BOLD,
    },
    headText: {
        fontSize: fontSizes.LARGER,
        color: colors.greyLevel1,
        fontFamily: fontFamily.REGULAR
    },
    headerText: {
        fontSize: fontSizes.LARGER,
        color: colors.greyLevel1,
        fontFamily: fontFamily.BOLD,
        // fontWeight: 'bold'
    },
    textual: {
        fontSize: fontSizes.X_SMALL,
        color: colors.greyLevel1,
        fontFamily: fontFamily.REGULAR,
        textAlign: 'center'
    },
    Banktextual: {
        fontSize: fontSizes.SMALL,
        color: colors.greyLevel1,
        fontFamily: fontFamily.REGULAR,
        textAlign: 'center',
        marginBottom: 6
    },
    poiText: {
        fontSize: fontSizes.MEDIUM,
        color: colors.greyLevel1,
        fontFamily: fontFamily.SEMI_BOLD
    },
    poiLineText: {
        fontSize: fontSizes.SMALL,//X_SMALL
        color: colors.gray2,
        fontFamily: fontFamily.REGULAR
    },
    lineText: {
        fontSize: fontSizes.SMALLEST,//SMALL
        color: colors.greyLevel1,
        fontFamily: fontFamily.REGULAR
    },
    linesText: {
        fontSize: fontSizes.SMALL,//X_SMALL
        color: colors.disabledGrayText,
        fontFamily: fontFamily.REGULAR,
        alignItems: 'center',
    },
    footerText: {
        fontSize: fontSizes.SMALL,
        color: colors.gray3,
        fontFamily: fontFamily.REGULAR
    },
    tipText: {
        fontSize: fontSizes.SMALLEST,
        color: colors.toolTipText,
        fontFamily: fontFamily.REGULAR,
        marginBottom: 6
    },
    lineTextual: {
        fontSize: fontSizes.SMALL,
        color: colors.gray2,
        fontFamily: fontFamily.REGULAR,
        marginBottom: 2
    },
    circleText: {
        fontSize: fontSizes.SMALL,
        color: colors.WHITE,
        fontFamily: fontFamily.REGULAR,
        paddingHorizontal: 4,
    },
    wrapper: {
        borderRadius: 26,
        backgroundColor: colors.WHITE,
        paddingHorizontal: 30,
        // marginTop: 30
    },
    formContainerStyle: {
        borderRadius: 16,
        backgroundColor: colors.WHITE,
        padding: 20,
        paddingHorizontal: 24,
        marginTop: 10,
        marginBottom: 0,
    },
    videoContainer: {
        flex: 1,
        backgroundColor: colors.kycDocUploadBackground,
    },
    header: {
        backgroundColor: colors.kycDocUploadBackground,
        // paddingVertical: 10,
    },
    formContainer: {
        padding: 10,
        flex: 1
    },
    buttonStyle: {
        alignSelf: 'center'
    },
    formText: {
        fontFamily: fontFamily.BOLD,
        fontSize: fontSizes.MEDIUM,
        color: colors.greyLevel1,
        paddingBottom: 24,
        paddingTop: 32,
        paddingBottom: 0,
        // fontWeight: 'bold'
    },
    formLineText: {
        fontFamily: fontFamily.BOLD,
        fontSize: fontSizes.MEDIUM,
        color: colors.greyLevel1,
    },
    locLineText: {
        fontFamily: fontFamily.BOLD,
        fontSize: fontSizes.LARGE,
        color: colors.greyLevel1,
    },
    tagLine: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.LARGE, //MEDIUM
        color: colors.disabledGrayText,
    },
    bankTagLine: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.SMALLEST, //MEDIUM
        color: colors.disabledGrayText,
    },
    tagLines: {
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSizes.LARGE,//SMALL
        color: colors.greyLevel1,
    },
    fieldText: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.SMALL,
        color: colors.disabledGrayText,
    },
    errText: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.MEDIUM,
        color: 'white',
        padding: 4
    },
    textStyle: {
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSizes.LARGE,
        color: colors.gray1,
        paddingBottom: 24,
    },
    orangeTextStyle: {
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSizes.MEDIUM,
        color: '#ff7744'
    },
    orangeStyles: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.SMALL,
        color: '#ff7744'
    },
    orangeStyle: {
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSizes.SMALL,
        color: '#ff7744',
        marginTop: 4
    },
    poiWrapper: {
        borderRadius: 8,
        padding: 20,
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 24,
    },
    signatureWrapper: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    signatureStyle: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        overflow: 'hidden',
    },
    signatureContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 20,
        borderColor: '#ececec',
        flex: 1,
        overflow: 'hidden',
        padding: 15,
        backgroundColor: '#fbfbfb',
        position: 'relative',

        alignItems: 'center',
        justifyContent: 'center',
        width: width - 40,
        height: width - 100
    },
    imageContainerStyles: {
        width: width - 40,
        height: width - 150,
        borderRadius: 20
    },
    btnStyling: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: colors.kycDocUploadBackground
    },
    imageContainer: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 6,
        borderColor: '#d8d8d8',
        backgroundColor: '#fbfbfb',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: (width / 2) - 40,
        height: (width / 2) - 40
    },
    inputValueStyle: {
        fontFamily: fontFamily.SEMI_BOLD,
        color: colors.greyLevel1,
        fontSize: fontSizes.MEDIUM
    },
    tickinputValueStyle: {
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSizes.MEDIUM,
        flexDirection: 'row',
        alignItems: 'center',
    },
    underlineStyle: {
        borderBottomColor: colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    chkboxValueStyle: {
        fontFamily: fontFamily.REGULAR,
        color: colors.disabledGrayText,
        fontSize: fontSizes.MEDIUM,
        borderRadius: 0
    },
    selectedChkStyle: {
        fontFamily: fontFamily.SEMI_BOLD,
        color: colors.greyLevel1,
        fontSize: fontSizes.MEDIUM,
        // fontWeight: 'bold'
    },
    tagWrapper: {
        borderRadius: 12,
        borderColor: colors.greyLevel2,
        borderWidth: StyleSheet.hairlineWidth,
        marginRight: 10,
        marginBottom: 10
    },
    lineWrapper: {
        padding: 10
    },
    contentContainer: {
        flex: 1,
        height: height - 200,
        // marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyles: {
        justifyContent: "flex-end", alignItems: "center", marginVertical: 10
    },
    boxShadow: {
        //This handles shadow on both android & iOS
        backgroundColor: '#fff',
        shadowColor: '#33d1cece',
        shadowOffset: { width: 2, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 4,
    },
    footerStyle: {
        backgroundColor: '#eaeaea',
        // padding:8 ,
        paddingVertical: 20,
        borderBottomEndRadius: 12,
        borderColor: colors.greyLevel2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        // flex: 1,
        // flexDirection: 'row',
        paddingLeft: 25,
        marginTop: 20,
        paddingHorizontal: 0,
    },
    circleStyle: {
        borderRadius: 7,
        width: 14,
        height: 14,
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'red',
        marginRight: 3
    },
    error: {
        color: colors.ERROR,
        marginTop: 3,
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.SMALL//X_SMALL
    },
    upperTextStyle: {
        fontFamily: fontFamily.SEMI_BOLD,
        color: colors.greyLevel1,
        fontSize: fontSizes.MEDIUM
    },
    imageLoaderStyle: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },

    //active field styes

    activeImageStyle: {
        borderColor: colors.disabledGrayText,
        borderWidth: 1
    },
    errorText: {
        borderRadius: 12,
        color: colors.errorText1,
        borderColor: colors.errorText1,
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 4,
        fontFamily: fontFamily.SEMI_BOLD,
        fontSize: fontSizes.SMALL,
        marginLeft: 6
    },
    bankdetailContainer: {
        borderRadius: 10,
        backgroundColor: colors.grayBackground,
        flex: 1,
        flexDirection: 'row',
        padding: 18,
        marginHorizontal: 10
    },
    searchBar: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: '#f6f6f6',
        borderBottomWidth: 0
    },
    ifscStyle: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderBottomColor: colors.disabledGrayText,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    ifscContainer: {
        marginVertical: 12,
        borderBottomColor: colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    icon: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 999,
        right: -10,
        top: -10,
        padding: 3
    },
    container: {
        justifyContent: 'center',
        paddingTop: 8,
        padding: 8,
        height: 200,
        backgroundColor: 'green',
    },
    chequeBorder: {
        borderWidth: 1,//StyleSheet.hairlineWidth,
        borderRadius: 10,
        borderColor: '#ffeedf',
        marginTop: 30,
        padding: 20
    },
    placeholderView: {
        margin: 2,
        fontSize: fontSizes.SMALLEST,
        color: colors.gray2,
        fontFamily: fontFamily.REGULAR,
    },
    placeholderText: {
        margin: 2,
        fontSize: fontSizes.MEDIUM,
        color: colors.disabledGrayText,
        fontFamily: fontFamily.SEMI_BOLD,
    },
    verifyText: {
        marginTop: 31,
        marginLeft: 5,
        fontSize: fontSizes.SMALL,
        color: "#1fbb46",
        fontFamily: fontFamily.SEMI_BOLD,
    },
    verify: {
        marginTop: 30,
        marginLeft: 5,
        fontSize: fontSizes.SMALLEST,
        color: "#ff7744",
        fontFamily: fontFamily.SEMI_BOLD,
    },
    wrapperHolder: {
        borderRadius: 14,
        backgroundColor: colors.WHITE,
        paddingHorizontal: 30,
    },
    emailStyle: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 40,
        marginRight: 20,
        marginBottom: 5,
    },
    linkStyle: {
        color: colors.greenColor,
        fontSize: fontSizes.SMALLEST,
        fontStyle: "italic",
        marginVertical: 3,
    },
    linkTextStyle: {
        fontSize: fontSizes.SMALLEST,
        fontStyle: "italic",
        marginVertical: 3
    },
    headerVideoText: {
        marginBottom: 10,
        color: colors.greyLevel1,
        fontSize: fontSizes.MEDIUM,
        fontFamily: fontFamily.SEMI_BOLD
    },
    toolTipVideo: {
        color: colors.greyLevel1,
        borderBottomWidth: 7,
        borderBottomColor: colors.fadeOrange,
        fontSize: fontSizes.SMALLEST,
        fontFamily: fontFamily.REGULAR
    },
    toolTipMainView: {
        backgroundColor: colors.fadeOrange,
        borderRadius: 12,
        padding: 12,
        width: '100%',
        marginBottom: 100,
    },

    bankCancelledChequeInfo: {
        fontSize: fontSizes.SMALL,
        fontFamily: fontFamily.REGULAR,
        marginHorizontal: 20,
        color: colors.toolTipText,
        paddingVertical: 10,
        flexShrink: 1
    },
    bankStatementView: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 5
    },
    bankToolTipHeaderView: {
        marginTop: 5, 
        marginHorizontal: 15
    },
    bankToolTipContainerView: { 
        paddingHorizontal: 4, 
        paddingRight: 10, 
    },
    horizontalBar: {
        borderBottomColor: colors.gray2, 
        borderBottomWidth: 1, 
        paddingVertical: 12
    }, 
    bulletView: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginRight: 50
    },
    cancelledCHequeImage: {
        width: 120,
        height: 70,
    }, 
    nsdlView: {
        backgroundColor: 'black',
        opacity: 0.9,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nsdlHeadingText: {
        fontFamily: fontFamily.SEMI_BOLD,
        color: colors.WHITE,
        fontSize: fontSizes.LARGER,
    },
    nsdlTagText: {
        fontFamily: fontFamily.SEMI_BOLD,
        color: colors.WHITE,
        fontSize: fontSizes.MEDIUM,
    },
    nsdlSubHeadingText: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.MEDIUM,
        color: colors.disabledGrayText
    },
    nsdlOtpText: {
        fontFamily: fontFamily.REGULAR,
        fontSize: fontSizes.MEDIUM,
        textAlign: 'center',
        color: colors.disabledGrayText
    },
    nsdlOtpBottomView: {
        marginHorizontal: 30,
        padding: 20,
        backgroundColor: '#222222',
        borderRadius: 20,
    }

})