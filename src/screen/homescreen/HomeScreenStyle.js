import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';

const HomeStyle = StyleSheet.create({
    MainView: { width: '100%', flex:1, backgroundColor:GetAppColor.white},
    bottomBarView:{width: '100%', marginTop:AppUtil.getHP(3), paddingVertical:AppUtil.getHP(3), alignItems:'center',backgroundColor:GetAppColor.lightWhite},
    txtBotamBarTitil:{fontSize:AppUtil.getHP(2), fontFamily: FONTS.robotMedium, color:GetAppColor.innovationGrey},

    btn:{width:'90%',height:AppUtil.getHP(4.9), justifyContent:'center', alignItems:'center', marginTop:AppUtil.getHP(2), borderRadius:AppUtil.getHP(1), marginHorizontal:AppUtil.getHP(2), backgroundColor:GetAppColor.lightOrange},
    txtBtn:{fontSize:AppUtil.getHP(2), color:GetAppColor.white, fontFamily:FONTS.robotMedium},
});

export default HomeStyle;