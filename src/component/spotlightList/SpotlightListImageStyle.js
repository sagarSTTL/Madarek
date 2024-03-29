import { StyleSheet, Dimensions, Platform } from 'react-native';
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const STYLE = StyleSheet.create({
    headerProfileIcn: { marginHorizontal: AppUtil.getHP(1) },
    txtMenuOptions: { color: GetAppColor.pincolor, fontFamily: FONTS.robotRegular },
    menuView: { flexDirection: 'row', marginVertical: AppUtil.getHP(0.8), alignItems: 'center' },
    moreView: { alignItems: 'flex-end', flex: 1 },
    MainView: { width: '100%', },

    titleView: {
        marginHorizontal: AppUtil.getHP(2), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center",
        marginBottom: AppUtil.getHP(1)
    },
    bgImage: { width: '100%', height: "100%", borderRadius: AppUtil.getHP(2) },

    titleAnotherScreen: {
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotBold,
        fontSize: AppUtil.getHP(2.2),
        textAlign: 'left',
    },
    seeMoreAnotherScreen: {
        fontSize: AppUtil.getHP(1.7),
        color: GetAppColor.pincolor,
        fontFamily: FONTS.robotRegular
    },
    likeUnlikeIcn: { paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 },
    likeUnlikeBtn: { width: AppUtil.getHP(2), height: AppUtil.getHP(4), paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 },

    txtTitle: { fontSize: AppUtil.getHP(2.1), color: GetAppColor.textColor, fontFamily: FONTS.robotBold },
    txtSeeMore: { fontSize: AppUtil.getHP(1.7), color: GetAppColor.textColor, fontFamily: FONTS.robotRegular },

    renderMainView: {
        margin: '2%',
        padding: '4%', borderRadius: AppUtil.getHP(1),
        alignItems: "center", backgroundColor: GetAppColor.white, flexDirection: 'row', justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2.84,

        elevation: 2,

    },

    imgView: {
        width: "100%", height: AppUtil.getHP(13), borderRadius: AppUtil.getHP(1),
        overflow: 'hidden',
        backgroundColor: GetAppColor.borderImgShadow,
    },
    img: { width: "100%", height: AppUtil.getHP(13), borderRadius: AppUtil.getHP(1) },

    rightItems: { width: '40%', },
    leftItems: { width: '55%' },
    addSpaceTop: {
        marginTop: AppUtil.getHP(0.7)
    },
    calView: { flexDirection: 'row', alignItems: 'center', marginTop: AppUtil.getHP(0.9) },
    callIcn: { marginEnd: AppUtil.getHP(1) },
    callLeftIcn: { marginEnd: AppUtil.getHP(1), marginStart: AppUtil.getHP(1), },

    title: { fontSize: AppUtil.getHP(1.4), fontFamily: FONTS.robotMedium, color: GetAppColor.textColor },
    SubTitle: { fontSize: AppUtil.getHP(1.9), fontFamily: FONTS.robotMedium, color: GetAppColor.borderRed, marginVertical: AppUtil.getHP(0.9) },

    secondCalView: { flexDirection: 'row', marginTop: AppUtil.getHP(1), justifyContent: 'flex-start' },
    secondInnerCalView: { flexDirection: 'row', marginEnd: AppUtil.getHP(2), alignItems: 'center' },

    bottomBtn: {
        height: AppUtil.getHP(5), borderColor: GetAppColor.lightOrange,
        borderRadius: AppUtil.getHP(1), borderWidth: AppUtil.getHP(0.1), justifyContent: 'center', alignItems: 'center', margin: AppUtil.getHP(2),
    },
    txtBottomBtn: { fontSize: AppUtil.getHP(2), color: GetAppColor.lightOrange, fontFamily: FONTS.robotMedium },

    likeUnlikeIcn: { paddingHorizontal: AppUtil.getHP(2), position: 'absolute', end: 0, top: 5 },

    rewordView: {
        width: '100%', height: AppUtil.getWP(7), bottom: 0, borderBottomEndRadius: AppUtil.getHP(1),
        borderBottomStartRadius: AppUtil.getHP(1),
        position: 'absolute', backgroundColor: GetAppColor.blackTransperent, flexDirection: 'row',
        alignItems: 'center'
    },

    winningIcn: { marginStart: AppUtil.getHP(1) },
});

export default STYLE;