import React, { memo } from "react";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useSelector, useDispatch } from 'react-redux'
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native'

import Style from "./CommonHeaderStyle";
import { AppUtil } from "../../utils/AppUtil";

import IcnMenu from '../../assets/svg/IcnMenu'
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader'
import IcnMenuDote from '../../assets/svg/IcnMenuDote'
import IcnAlert from '../../assets/svg/IcnAlert'
import IcnSearch from '../../assets/svg/IcnSearch'
import IcnFilter from '../../assets/svg/IcnFilter'
import IcnMsg from '../../assets/svg/IcnMsg'
import { Label } from "../../utils/StringUtil";
import IcnBack from "../../assets/svg/IcnBack";
import IcnMultiMsg from "../../assets/svg/IcnMultiMsg";
import IcnEdit from "../../assets/svg/IcnEdit";
import IcnShareIcon from "../../assets/svg/IcnShareIcon";
import { GetAppColor } from "../../utils/Colors";


const CommonHeader = (props) => {

    const { themeColor } = useSelector((state) => state)
    const navigation = useNavigation();

    const onMenu = () => {
        return (
            <Menu>
                <MenuTrigger>
                    <IcnMenuDote style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                </MenuTrigger>

                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Messag`)} style={Style.menuView}>
                        <IcnMsg stroke={GetAppColor.black} style={Style.headerProfileIcn} height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                        <Text>{Label.Message}</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Search`)} style={Style.menuView}>
                        <IcnSearch fill={GetAppColor.black} style={Style.headerProfileIcn} height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                        <Text>{Label.Search}</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        )
    }

    if (props.isType === "HomeScreenHeader") {

        return (
            <>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                    <TouchableOpacity onPress={()=>props.openDrawer()} style={Style.LeftIcnView}>
                        <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <View style={Style.centerIcnView}>
                        <IcnMenuHeader style={Style.headerProfile} height={AppUtil.getHP(20)} width={AppUtil.getHP(20)} />
                    </View>

                    <View style={Style.rightIcnView}>
                        <TouchableOpacity>
                            <IcnAlert style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                        {onMenu()}
                    </View>

                </View>
            </>
        );
    }

    else if (props.isType === "IdeasListScreen") {
        return (
            <>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                    <TouchableOpacity style={Style.LeftIcnView}>
                        <IcnMenu style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <View style={Style.centerIcnView}>
                        <Text style={Style.txtHeader}>{Label.Ideas}</Text>
                    </View>

                    <View style={Style.rightIcnView}>
                        <TouchableOpacity>
                            <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );
    }

    else if (props.isType === "IdeaDetails") {
        return (
            <>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                    <TouchableOpacity style={Style.LeftIcnView}>
                        <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <View style={Style.centerIcnView}>
                        <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.IdeaDetails}</Text>
                    </View>

                    <View style={Style.rightIcnView}>
                        <TouchableOpacity>
                            <IcnMultiMsg style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IcnEdit style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                    </View>

                </View>
            </>
        )
    }
    else if (props.isType === "ExpertDetailsScreen") {
        return (
            <>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                    <TouchableOpacity style={Style.LeftIcnView}>
                        <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <View style={Style.centerIcnView}>
                        <Text style={Style.txtHeader}>{Label.ExpertDetails}</Text>
                    </View>

                    <View style={Style.rightSingleIcnView}>
                        <TouchableOpacity>
                            <IcnShareIcon stroke={GetAppColor.white} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        );
    }
    else if (props.isType === "ExpertDirectoryScreen") {
        return (
            <>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={true} />
                <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                    <TouchableOpacity style={Style.LeftIcnView} onPress={()=>{navigation.goBack()}}>
                        <IcnBack style={Style.headerProfile} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                    </TouchableOpacity>

                    <View style={Style.centerIcnView}>
                        <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.ExpertsDirectory}</Text>
                    </View>

                    <View style={Style.rightIcnView}>
                        <TouchableOpacity>
                            <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                        </TouchableOpacity>
                    </View>

                </View>
            </>
        )
    }
    else {
        return (
            null
        )
    }
}

export default memo(CommonHeader);





