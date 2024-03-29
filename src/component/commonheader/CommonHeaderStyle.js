import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import { headerFontSize } from '../../utils/Constant'
import { hederHeight } from '../../utils/Constant';
import { AppUtil } from '../../utils/AppUtil';

const CommonHeaderStyle = StyleSheet.create({
    MainView: { width: '100%', height: hederHeight, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: GetAppColor.headerLightYellow },

    middleIcnView: { position: 'absolute', end: 0, start: 0 },
    headerProfile: { alignSelf: 'center' },
    headerProfile1: { width:AppUtil.getWP(25), height:AppUtil.getHP(6.5), alignSelf: 'center' },
    txtHeader: { fontFamily: FONTS.robotMedium, fontSize: headerFontSize, color: GetAppColor.white, alignSelf: 'center' },


    LeftIcnView: { alignItems: 'center', marginStart: AppUtil.getWP(3) },
    centerIcnView: { alignItems: 'center',},
    rightSingleIcnView: { alignItems: 'flex-end', marginEnd: AppUtil.getWP(3) },
    rightIcnView: { flexDirection: 'row', justifyContent: 'space-around', marginEnd: AppUtil.getWP(3) },

    icnEmpty: { alignItems: 'flex-end', marginEnd: AppUtil.getWP(3), width: AppUtil.getHP(2.4) },



    headerLeftIcn: {},

    icnProp: { marginEnd: AppUtil.getWP(3) },

    // txtHeader:{fontFamily:FONTS.robotMedium, fontSize:headerFontSize, color:GetAppColor.white},

    menuView: { flexDirection: 'row', marginTop: '2%' },
    headerProfileIcn: { marginHorizontal: '3%' },

    expertHeader: {
        fontSize: headerFontSize,
        alignSelf: 'center',
        fontFamily: FONTS.robotBold
    },
    container: { position: 'absolute', start: AppUtil.getWP(12), flexDirection: 'row' },
    profile: {
        // backgroundColor: GetAppColor.grayShadeBorder,
        width: AppUtil.getHP(5),
        height: AppUtil.getHP(5),
        borderRadius: AppUtil.getHP(2.5)
    },
    subProfile: {
        width: AppUtil.getHP(5),
        height: AppUtil.getHP(5),
        borderRadius: AppUtil.getHP(2.5),
        backgroundColor:GetAppColor.grayShadeBorder
    },

    chatDetail: { alignItems: 'flex-start', justifyContent: 'center', marginStart: AppUtil.getWP(2) },
    onlineTxt: {
        fontFamily: FONTS.robotRegular,
    },
    chatTxt: {
        fontFamily: FONTS.robotMedium,
        color: GetAppColor.white,
        fontSize: AppUtil.getHP(1.8),
    },
    txtMenuOptions:{color:GetAppColor.black},
    redDot:{
        height:AppUtil.getHP(1),
        width:AppUtil.getHP(1),
        position:'absolute',
        right:0,
        borderRadius:AppUtil.getHP(0.5),
        backgroundColor:"#ef4d2f",
    }
});

export default CommonHeaderStyle;