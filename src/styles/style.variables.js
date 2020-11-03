import Color from 'color';
import forEach from 'lodash/forEach';
import { PixelRatio, Platform, Dimensions } from 'react-native';

const pixelRatio = PixelRatio.get();
const { width } = Dimensions.get('window');
const colors = {
    GRAY: Color.rgb(155, 155, 155).string(),
    WHITE: Color.rgb(255, 255, 255).string(),
    BLACK: Color.rgb(0, 0, 0).string(),
    LIGHT_GRAY: Color.rgb(232, 232, 232).string(),
    LIGHT_GRAY1: Color.rgb(237, 237, 237).string(),
    LIGHT_GRAY2: Color.rgb(204, 204, 204).string(),
    LIGHT_GRAY3: Color.rgb(222, 222, 222).string(),
    LIGHT_GRAY4: Color.rgb(252, 252, 255).string(),
    LIGHT_GRAY5: Color.rgb(240, 240, 246).string(),
    LIGHT_GRAY6: Color.rgb(29, 30, 48).string(),
    DARK_GRAY: Color.rgb(136, 136, 136).string(),
    DARKEST_GRAY: Color.rgb(51, 51, 51).string(),
    ERROR: Color.rgb(204, 68, 68).string(),

    //Primary
    neutralUIBlue: Color.rgb(51, 153, 255).string(),
    neutralUIOrange: Color.rgb(255, 119, 68).string(), //#ff7744
    nuetralgrey: Color.rgb(207, 207, 207).string(),

    //Background
    neutralUIBlack0: Color.rgb(30, 30, 32).string(), // Primary navigation background
    opaqueBlack: Color.rgb(0, 0, 0, 0.8).string(),
    opaqueBlackLight: Color.rgb(0, 0, 0, 0.04).string(),

    //Orange Tones.
    lightOrange: Color.rgb(227, 113, 77).string(),
    opaqueOrange: Color.rgb(227, 113, 77, 0.15).string(),
    opaqueOrange1: Color.rgb(255, 119, 68).string(),

    //  Font colors
    neutralUIGray1: Color.rgb(68, 68, 68).string(),
    neutralUIGray2: Color.rgb(239, 239, 239).string(), // (text)
    neutralUIGray3: Color.rgb(85, 85, 85).string(),
    neutralUIGray4: Color.rgb(203, 203, 203).string(),
    neutralUIGray5: Color.rgb(216, 216, 216).string(),
    neutralUIGray6: Color.rgb(170, 170, 170).string(), //#aaaaaa
    neutralUIGray7: Color.rgb(221, 221, 221, 0.6),

    // buttonColor1: Color.rgb(232, 92, 51).string(),
    // buttonColor2: Color.rgb(255, 141, 73).string(),

    buttonColor1: '#EB8345',
    buttonColor2: '#F6693F',

    //ERROR
    errorColor: Color.rgb(207, 86, 98).string(), //Red
    successColor: Color.rgb(89, 187, 109).string(), //Green
    pendingColor: Color.rgb(255, 163, 20).string(), //Yellow

    gray1: '#444444',
    gray2: '#aaaaaa',
    gray3: '#888888',
    gray4: '#aeaeae',
    gray5: '#5c5c5c',
    gray6: '#404042',
    gray7: '#979797',
    gray8: '#f0f0f6',
    gray9: '#c5c5c5',
    gray10: '#d8d8d8',
    lightestGray: '#dddddd',
    periwinkleGray: '#ceceeb',
    yellow: '#e1a223',
    purple: '#e5e5f8',
    greyButton: '#f2f3f8',
    success: '#59bb6d',
    warning: '#ffaf44',
    error: '#dd6666',
    lightYellow: '#fcf7f1',
    statusYellow: '#ee9900',
    opaqueRed: '#dd666610',
    opaqueYellow: '#ee990010',
    kycDocUploadBackground: '#f7f8fb',
    disabledGrayText: '#666666',
    disabledGrayBorder: '#e3e3e350',
    backgroundGray: '#f8f8f8',
    snNotificationRed: '#de0303',
    darkCardBody: '#2c2c39',
    darkCardHeader: '#343444',
    mineShaft: '#202020',
    jumbo: '#86868e',
    orangeText: '#d0a16b',
    settleUpGradientColors: ['#25d16c', '#1aa55a'],
    textAreaBackground: '#282833',
    bottomLineColor: '#cbcbcb',
    brown: '#601f1f',
    fadeOrange: '#fff6ef',
    lightOrange: '#ffefe2',
    fadeOrange2: "#ffb295",

    //gold

    gold1: '#5d4216',
    gold2: '#b18a58',
    gold3: '#d4aa75',
    gold4: '#5a492c',
    gold5: '#3f2e19',
    gold6: '#948467',
    gold7: '#c5a37c',

    //silver

    silver1: '#3b3b3b',
    silver2: '#9e9e9e',
    silver3: '#ececec',
    silver4: '#3b3b3b',
    silver5: '#a8a8a8',
    silver6: '#ffffff',

    //upgradeBronzeHeader
    bronze1: '#53442a',
    bronze2: '#3d3320',
    bronze3: '#bf9543',
    bronze4: '#3d3320',
    bronze5: '#d8b778',
    bronze6: '#7d6129',

    //upgradeSuccessPopUp
    goldcolor1: '#e6bf77',
    goldcolor2: '#a88133',
    silverColor1: '#d2d2d2',
    silverColor2: '#8d8d8d',

    //upgradeLevelSuccesUpgrde

    silverLevel1: '#bdbcbc',
    silverLevel2: '#d9d9d9',
    silverLevel3: '#d8d8d8',
    silverLevel4: '#22211e',
    silverLevel5: '#22211e',

    goldLevel1: '#ffd381',
    goldLevel2: '#ffd481',
    goldLevel3: '#8b7d63',
    goldLevel4: '#22211e',
    goldLevel5: '#221e16',

    //LevelBlock

    goldLevelBlock1: '#ffd381',
    goldLevelBlock2: '#22211e',
    silverLevelBlock1: '#e6e6e6',
    silverLevelBlock2: '#5d5d5d',
    bronzeLevelBlock1: '#c5a698',
    greyLevel1: '#222222',
    greyLevel2: '#cccccc',
    errorText1: '#ff4c6f',
    grayBackground: '#f6f6f6',
    greenColor: '#1fbb46',
    toolTipText: '#8e8e8e',
};

// const fontSizes = {
//     XXX_SMALL: 6,
//     XX_SMALL: 8,
//     S_SMALL: 9,
//     X_SMALL: 10,
//     SMALL: 12,
//     MEDIUM: 14,
//     LARGE: 16,
//     LARGER: 18,
//     X_LARGE: 20,
//     XX_LARGE: 24,
//     GIANT: 32
// };
const fontSizes = {
    XXX_SMALL: 4,
    XX_SMALL: 6,
    S_SMALL: 7,
    X_SMALL: 8,
    SMALL: 10,
    SMALLEST: 11,
    MEDIUM: 13,
    LARGE: 14,
    LARGER: 16,
    LARGEST: 17,
    X_LARGE: 18,
    XX_LARGE: 22,
    GIANT: 30
};

/**
 * Scale fonts for large screens.
 * pixelRatio === 3
 *      - iPhone 6, 7, 8 Plus
 *      - iPhone X, XS, XS Max
 *      - xxhdpi Android devices
 * pixelRatio === 3.5
 *      - xxhdpi Android devices
 */
const scaleFonts = factor => {
    forEach(fontSizes, (value, fontSize) => {
        fontSizes[fontSize] = value + factor;
    });
};
if (Platform.OS === 'android') {
    if (pixelRatio <= 1) {
        //mdpi
        scaleFonts(0);
    } else if (pixelRatio > 1 && pixelRatio <= 1.5) {
        //hpdi
        scaleFonts(0);
    } else if (pixelRatio > 1.5 && pixelRatio <= 2) {
        //xhdpi
        scaleFonts(0);
    } else if (pixelRatio > 2 && pixelRatio <= 3) {
        //xxhdpi
        // scaleFonts(2);
        scaleFonts(1);
    } else if (pixelRatio > 3) {
        //xxxhpdi
        // scaleFonts(4);
        scaleFonts(3);
    }
} else {
    if (pixelRatio >= 2 && width > 320) {
        //width check to avoid scaling in iPhone SE & 5S.
        scaleFonts(2);
    }
}

export { fontSizes };

export const fontWeights = {
    NORMAL: 300,
    BOLD: 700
};

export const SPACING_BASE = 8;

export const FACTORS = {
    XX_SMALL: 0.5,
    X_SMALL: 1,
    SMALL: 2,
    MEDIUM: 3,
    LARGE: 4,
    X_LARGE: 5,
    XX_LARGE: 6,
    XXX_LARGE: 8
};

const getSpacing = factor => {
    return SPACING_BASE * factor;
};

export const fontFamily = {
    REGULAR: 'SourceSansPro-Regular',
    SEMI_BOLD: 'SourceSansPro-Semibold',
    BOLD: 'SourceSansPro-Bold'
};

export { colors, getSpacing };
