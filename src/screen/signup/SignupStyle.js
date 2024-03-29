import { StyleSheet } from "react-native";
import { AppUtil } from "../../utils/AppUtil";
import { GetAppColor } from "../../utils/Colors";
import FONTS from "../../utils/Fonts";
import { buttonHeight, hederHeight, inputFieldHight } from "../../utils/Constant";
import { buttonFontSize } from "../../utils/Constant";
import { headerFontSize } from "../../utils/Constant";
import { buttonBorderRadius } from "../../utils/Constant";

const SignupStyles = StyleSheet.create({
    headerView: {
        width: '100%',
        height: hederHeight,
        backgroundColor: GetAppColor.headerYellow,
        justifyContent: 'center',
    },
    centerUrl : {
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        color: GetAppColor.white,
        // fontWeight: '900',
        fontSize: headerFontSize,
        alignSelf: 'center',
        fontFamily: FONTS.robotBold
    },
    backButton: {
        position: 'absolute',
        start: 10,

    },
    roundMainView: {
        marginHorizontal: AppUtil.getHP(2.5),
        marginVertical: AppUtil.getHP(2.5),
        backgroundColor: GetAppColor.white,
        borderRadius: 25,
        // width:AppUtil.getWP(90),
        // height:AppUtil.getHP(80),
        padding: AppUtil.getWP(5)

    },
    userTypeText: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.84),
        color: GetAppColor.textColor,
        marginTop: AppUtil.getHP(1),
    },
    userTypeButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: AppUtil.getHP(1.5),
        justifyContent: 'space-between'
    },
    yellowBorderView: {
        height: AppUtil.getHP(2.71),
        width: AppUtil.getHP(2.71),
        borderRadius: AppUtil.getHP(2.71 / 2),
        borderColor: GetAppColor.headerYellow,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),
    },
    grayBorderView: {
        height: AppUtil.getHP(2.71),
        width: AppUtil.getHP(2.71),
        borderRadius: AppUtil.getHP(2.71 / 2),
        borderColor: GetAppColor.grayBorder,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: AppUtil.getHP(0.5),
    },
    yellowFillView: {
        height: AppUtil.getHP(1.79),
        width: AppUtil.getHP(1.79),
        borderRadius: AppUtil.getHP(1.79 / 2),
        backgroundColor: GetAppColor.headerYellow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: AppUtil.getHP(3.17),
        width: '100%'
    },
    nameAnotherView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: AppUtil.getHP(3.17),
        width: '100%'
    },
    titleText: {
        fontFamily: FONTS.robotRegular,
        fontSize: AppUtil.getHP(1.84),
        color: GetAppColor.textColor,
        marginBottom: AppUtil.getHP(0.82)
    },
    corporate: {
        color: GetAppColor.borderRed
    },
    inputstyle: {
        width: "100%",
        height: inputFieldHight,
        borderWidth: 1,
        borderColor: GetAppColor.borderGray,
        borderRadius: 5,
        padding: 5,
        color: GetAppColor.textColor

    },
    codeinputstyle: {
        width: '30%',
        height: inputFieldHight,
        borderWidth: 1,
        borderColor: GetAppColor.borderGray,
        borderRadius: 5,
        alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: AppUtil.getWP(2),
        color: GetAppColor.textColor
    },
    numberinputstyle: {
        width: '70%',
        height: inputFieldHight,
        borderWidth: 1,
        borderColor: GetAppColor.borderGray,
        borderRadius: 5,
        padding: 5,
        color: GetAppColor.textColor

    },
    showCorporateActive: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5,
        padding: 8,
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
        width: '50%',
        height: inputFieldHight,
        color: GetAppColor.grayBorder,
        marginBottom: AppUtil.getHP(1.5),
        backgroundColor:GetAppColor.backColor,

    },
    signupButton: {
        width: '100%',
        height: buttonHeight,
        backgroundColor: GetAppColor.headerYellow,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: AppUtil.getHP(2.5)
    },
    signupText: { color: GetAppColor.white, fontFamily: FONTS.robotMedium, fontSize: buttonFontSize },

    numberAreaOne: {
        borderWidth: 1,
        borderColor: GetAppColor.disableBorder,
        borderRadius: 5,
        padding: 8,
        marginEnd: 5,
        fontFamily: FONTS.robotRegular,
        width: '30%',
        height: AppUtil.getHP(5.63),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    codePickerArea: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    backIcon: {
        position: 'absolute',
        right: 10,
    },

})
export default SignupStyles;