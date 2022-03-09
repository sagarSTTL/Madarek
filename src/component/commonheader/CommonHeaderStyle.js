import { StyleSheet } from 'react-native'
import { GetAppColor } from '../../utils/Colors';
import FONTS from '../../utils/Fonts';
import {headerFontSize} from '../../utils/Constant'
import { hederHeight } from '../../utils/Constant';

const CommonHeaderStyle = StyleSheet.create({
    MainView: { width: '100%', height:hederHeight,  flexDirection:'row', alignItems:'center', backgroundColor:GetAppColor.headerLightYellow },

    LeftIcnView:{width: '15%',alignItems:'center'},
    centerIcnView:{width: '65%', alignItems:'center'},
    rightIcnView:{width: '20%',  flexDirection:'row', justifyContent:'space-around'},

    headerProfile:{},
    headerLeftIcn:{},

    txtHeader:{fontFamily:FONTS.robotMedium, fontSize:headerFontSize, color:GetAppColor.white},
});

export default CommonHeaderStyle;