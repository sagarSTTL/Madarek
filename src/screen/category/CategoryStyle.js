import { StyleSheet } from 'react-native'
import { AppUtil } from '../../utils/AppUtil';
import { GetAppColor } from '../../utils/Colors';
import { buttonHeight, hederHeight } from '../../utils/Constant';
import FONTS from '../../utils/Fonts';
import { buttonFontSize } from '../../utils/Constant';
import { headerFontSize } from '../../utils/Constant';
import { buttonBorderRadius } from '../../utils/Constant';

const CategoryStyle = StyleSheet.create({
    headerView: {
        width: '100%',
        height: hederHeight,
        backgroundColor: GetAppColor.headerYellow,
        justifyContent: 'center',
    },
    headerText: {
        color: GetAppColor.white,
        fontSize:headerFontSize,
        alignSelf: 'center',
        fontFamily:FONTS.robotBold
    },
    skipBtn: {
        position: 'absolute',
        end: 10,
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: GetAppColor.skipBorderColor,
        height: 25,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    skipText: {
        color: GetAppColor.white,
        fontSize: AppUtil.getHP(2.05),
        fontFamily:FONTS.robotRegular,
    },
    searchView: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'#F5F7FB'
    },

    scroll: {
        width: '100%',
        marginBottom:buttonHeight+10,
        backgroundColor: GetAppColor.backGround
    },

    scrollSubView: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    categoryButton: {
        borderRadius: 25,
        backgroundColor: GetAppColor.white,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 5
    },

    continueButton: {
        width: '90.74%',
        height: buttonHeight,
        backgroundColor: GetAppColor.headerYellow,
        borderRadius: buttonBorderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 5,
        position:'absolute',
        bottom:10
    },

    continueText:{ color: GetAppColor.white, fontFamily:FONTS.robotMedium, fontSize:buttonFontSize },

    input: {
        width: '100%',
        fontSize: 20,
        paddingBottom: 10,
        borderBottomColor: GetAppColor.borderGray,
        borderBottomWidth: 1,
        backgroundColor:'#F5F7FB',
        color:GetAppColor.textColor,
    },

});

export default CategoryStyle;