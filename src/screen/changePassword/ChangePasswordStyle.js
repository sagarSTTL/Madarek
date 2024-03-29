import { Platform, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
// import Colors from "../../utils/Colors",
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts"
import { inputFieldHight } from "../../utils/Constant";
import { AppUtil } from "../../utils/AppUtil";
import { buttonHeight } from "../../utils/Constant";
import { buttonFontSize } from "../../utils/Constant";
import { buttonBorderRadius } from "../../utils/Constant";

const PAGESTYLE = StyleSheet.create({
    multiSelectYellowBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: GetAppColor.buttonGreenColor,
        backgroundColor: GetAppColor.buttonGreenColor,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: AppUtil.getWP(1.8)

    },
    multiSelectBorderView: {
        height: AppUtil.getHP(2),
        width: AppUtil.getHP(2),
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: AppUtil.getWP(1.8)
    },
    corporateUser: {
        lineHeight: AppUtil.getHP(2),
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.grayBorder,
        fontSize: 13
    },
    corporateView: {
        flexDirection: 'row'
    },
    clickArea: { alignItems: 'center', flexDirection: 'row' },
    mainView: {
        backgroundColor: GetAppColor.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: AppUtil.getHP(2)
    },
    headingMain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerPart: {
        width: '100%',
        height: '100%',
        marginTop:'10%',
        paddingHorizontal: 15,
    },
    headingMainText: {
        fontSize: 25,
    },
    signView: {
        backgroundColor: GetAppColor.white,
        borderRadius: 10,
        paddingHorizontal: AppUtil.getWP(4),
        paddingVertical: AppUtil.getHP(3),
       

    },
    signText: {
        color: GetAppColor.lightOrange,
        fontFamily: FONTS.robotMedium,
        fontSize: 25
    },
    userInformation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 20,
        marginTop: AppUtil.getHP(1.5)
    },
    loginEmailCredential: {
        padding: 6,
        // backgroundColor:'red'
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20
    },
    loginMobileCredential: {
        padding: 6,
        // backgroundColor:'red'
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        borderTopStartRadius: 20,
        borderBottomStartRadius: 20
    },
    emailCredential: {
        backgroundColor: GetAppColor.disableGrey
    },
    mobileLoginText: {
        fontFamily: FONTS.robotMedium,
        fontSize: 18,
        // color: GetAppColor.black,
    },
    emailLoginText: {
        fontFamily: FONTS.robotRegular,
        fontSize: 18,
        // color: GetAppColor.commonBorderGrey
    },
    isEnableText: {
        color: GetAppColor.black,
        fontFamily: FONTS.robotMedium,
        fontSize: 18,
    },
    isDisableText: {
        color: GetAppColor.commonBorderGrey,
        fontFamily: FONTS.robotRegular,
        fontSize: 18,
    },
    middleLine: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder
    },
    numberArea: {
        flexDirection: 'row',
        marginTop: AppUtil.getHP(3),
        marginBottom: AppUtil.getHP(1),
    },
    toggleNumber: {
        justifyContent: 'center', width: 70
    },
    numberAreaOne: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        marginEnd: 5,
        fontFamily: FONTS.robotRegular,
        width: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: inputFieldHight
    },
    codePickerArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIcon: {
        position: 'absolute',
        right: 10,
    },
    showEmailDetail: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        width: '100%',
        paddingStart: 15,
        height: inputFieldHight,
        color: GetAppColor.black,
        marginBottom: AppUtil.getHP(1.5),
    },
    showCorporateActive: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        width: '50%',
        paddingStart: 15,
        height: inputFieldHight,
        color: GetAppColor.black,
        marginBottom: AppUtil.getHP(1.5),
    },
    showCorporateDisable: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
        paddingVertical: 9,
        width: '50%',
        height: inputFieldHight,
        color: GetAppColor.grayBorder,
        marginBottom: AppUtil.getHP(1.5),
        backgroundColor:GetAppColor.backColor
    },
    centerUrl:{
        alignItems:'center',
        justifyContent:'center'
    },
    showMobileDetail: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        height: inputFieldHight,
        flex: 1,
        paddingStart: 15,
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.black,
        marginBottom: AppUtil.getHP(1),

    },
    otpArea: {
        flexDirection: 'row',
        marginBottom: AppUtil.getHP(1),
        marginTop: AppUtil.getHP(0.5)

    },
    getOtpArea: {
        right: 0, position: 'absolute',
        backgroundColor: GetAppColor.lightOrange,
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 2

    }, getOtpText: {
        color: GetAppColor.white,
        fontFamily: FONTS.robotRegular
    },
    addOtp: {
        fontSize: 16,
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.commonBorderGrey
    },
    resendOtpArea: {
        flexDirection: 'row',
        marginVertical: 10
    },
    otpSquareArea: {
        flexDirection: 'row',
        marginBottom: 5
    },
    showPassword: {
        width: '100%',
        height: inputFieldHight,
        borderColor: GetAppColor.disableBorder,
        borderWidth: 1,
        borderRadius: 5,
        paddingStart: 15,
        marginTop:AppUtil.getHP(1),
        color: GetAppColor.black
    },
    resendText: {
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.black,
        fontSize: 13
    },
    resendTextFirst: {
        fontSize: 13,
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.commonTextColor

    },
    resendTextSecond: {
        fontSize: 13,
        color: GetAppColor.black,
    },
    passwordView: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
    },
    signInButton: {
        backgroundColor: GetAppColor.lightOrange,
        height: buttonHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: buttonBorderRadius

    },
    SignInbuttonText: {
        color: GetAppColor.white,
        fontSize: buttonFontSize,
        fontFamily: FONTS.robotMedium,
    },
    bottomButtomArea: {
        marginVertical: 15,
    },
    accountPart: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 15
    },
    signUptext: {
        color: GetAppColor.black,
        fontFamily: FONTS.robotMedium,
    },
    reciveAccount: {
        fontFamily: FONTS.robotRegular,
        color: GetAppColor.commonTextColor
    },
    continueArea: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: AppUtil.getHP(3),
    },

    squreBox: {
        flex: 1,
        height: inputFieldHight,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        margin: 5,
        borderColor: GetAppColor.disableBorder,
        opacity: 1,
        fontFamily: FONTS.robotMedium,
        fontSize: 20,
        textAlign: 'center',
        color: GetAppColor.black
    },
    usePassword: {
        color: GetAppColor.black,
        fontFamily: FONTS.robotMedium,
        fontSize: 13
    },
    hidePascod: {
        position: 'absolute',
        right: 0
    }

})

export default PAGESTYLE