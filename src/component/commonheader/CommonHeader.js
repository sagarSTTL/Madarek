import React, { memo } from "react";
import { View, Text, TouchableOpacity, StatusBar, Image, LogBox } from "react-native";
import { useSelector } from 'react-redux'
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';
import Style from "./CommonHeaderStyle";
import { AppUtil } from "../../utils/AppUtil";
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader';
import IcnMenuDote from '../../assets/svg/IcnMenuDote';
import IcnSearch from '../../assets/svg/IcnSearch';
import IcnFilter from '../../assets/svg/IcnFilter';
import IcnMsg from '../../assets/svg/IcnMsg';
import { Label } from "../../utils/StringUtil";
import IcnMultiMsg from "../../assets/svg/IcnMultiMsg";
import IcnEdit from "../../assets/svg/IcnEdit";
import IcnShareIcon from "../../assets/svg/IcnShareIcon";
import { GetAppColor } from "../../utils/Colors";
import EditProfile from "../../assets/svg/UserProfile/EditProfile";
import NotificationsButton from "../button/NotificationsButton";
import MenuButton from "../button/MenuButton";
import BackButton from "../button/BackButton";
import ImageLoad from "react-native-image-placeholder";
import { UserManager } from "../../manager/UserManager";
import { Loger } from "../../utils/Loger";
import { getCorporateProfile } from "../../manager/AppConfig";



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

                    <MenuOption onSelect={() => navigation.navigate("Message")} style={Style.menuView}>
                        <IcnMsg stroke={GetAppColor.black} style={Style.headerProfileIcn} height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                        <Text style={Style.txtMenuOptions}>{Label.Message}</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => navigation.navigate("SearchLabel", { screen: "HomeScreen" })} style={Style.menuView}>
                        <IcnSearch fill={GetAppColor.black} style={Style.headerProfileIcn} height={AppUtil.getHP(2.2)} width={AppUtil.getHP(2.2)} />
                        <Text style={Style.txtMenuOptions}>{Label.Search}</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        )
    }

    switch (props.isType) {

        case 'HomeScreenHeader':
            let _url = getCorporateProfile();
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>


                        <View style={Style.middleIcnView}>
                            {_url == "" && <IcnMenuHeader style={Style.headerProfile} height={AppUtil.getHP(20)} width={AppUtil.getHP(20)} />}
                            {_url != "" && <ImageLoad style={Style.headerProfile1} resizeMode='contain' source={{ uri: _url }} />}
                        </View>

                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <NotificationsButton />
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel", { screen: "HomeScreen" })}>
                                <IcnSearch style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </>
            );
            break
        case 'IdeasListScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={Style.txtHeader}>{Label.Ideas}</Text>
                        </View>

                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel")}>
                                <IcnSearch style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.onFilter()}>
                                <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                                {/* isFilter */}

                                {props.isFilter ? <View style={Style.redDot} /> : null}
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'IdeaDetails':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.IdeaDetails}</Text>
                        </View>

                        <BackButton onRefresh={props.onRefresh} />

                        <View style={Style.rightIcnView}>
                            {/* <TouchableOpacity onPress={() => navigation.navigate("Message")}>
                                <IcnMultiMsg style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <IcnEdit style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity> */}
                        </View>

                    </View>
                </>
            )
            break
        case 'ExpertDetailsScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.ExpertDetails}</Text>
                        </View>

                        <View style={Style.rightSingleIcnView}>
                            <TouchableOpacity onPress={() => props.onShare()}>
                                <IcnShareIcon stroke={GetAppColor.white} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'ExpertDirectoryScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.ExpertsDirectory}</Text>
                        </View>

                        <BackButton />

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel", { screen: "EXPERT DIRECTORY", id: props.id })}>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </>
            )
            break
        case 'ExpertScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <MenuButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Experts}</Text>
                        </View>

                        <View style={Style.rightSingleIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel")}>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'UserDashboardScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.UserDashboard}</Text>
                        </View>

                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <NotificationsButton />
                            <TouchableOpacity onPress={() => navigation.navigate("Message")}>
                                <IcnMsg style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            {/* {onMenu()} */}
                        </View>

                    </View>
                </>
            );
            break
        case 'SmeDashboardScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.SmeDashboard}</Text>
                        </View>

                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <NotificationsButton />
                            <TouchableOpacity onPress={() => navigation.navigate("Message")}>
                                <IcnMsg style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>

                            {/* {onMenu()} */}
                        </View>

                    </View>
                </>
            );
            break
        case 'userCategoryScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <MenuButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.UserCategories}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            {/* <TouchableOpacity onPress={() => props.onFilter()}>
                                <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity> */}
                        </View>
                    </View>

                </>
            );
            break
        case 'ChallengesListing':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.Challenges}</Text>
                        </View>
                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel", { screen: "CHALLENGE" })}>
                                <IcnSearch style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.onFilter()}>
                                <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                                {props.isFilter ? <View style={Style.redDot} /> : null}

                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'ChallengeDetail':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton onRefresh={props.onRefresh} />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.ChallengeDetail}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break
        case 'SubmitIdeaScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.SubmitYourIdeas}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'NotificationsScreen':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Notifications}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                        {/* <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel")}>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </>
            );
            break;
        case 'Partners':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <MenuButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Parners}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel")}>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </>
            );
            break;
        case 'BecomeAnExpert':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.BecomeAnExpert}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'Setting':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.Settings}</Text>
                        </View>
                        <View style={Style.icnEmpty} />

                    </View>
                </>
            )
            break;
        case 'User Request':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                        <BackButton />
                        <View style={Style.centerIcnView}>
                            <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.UserRequest}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            )
            break;
        case 'Comments':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>
                        <BackButton />
                        <View style={Style.centerIcnView}>
                            <Text style={[Style.expertHeader, { color: themeColor.headerFontColor }]}>{Label.Comment}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            )
            break;
        case 'MyAccount':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.MyAccount}</Text>
                        </View>

                        <MenuButton />
                        <View style={Style.rightIcnView}>
                            <NotificationsButton />
                        </View>

                    </View>
                </>
            );
            break;
        case 'UserProfile':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.UserProfile}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => props.onEditProfile()}>
                                <EditProfile style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break;
        case 'UserEditProfile':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.UserProfile}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'Message':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <BackButton />
                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.Message}</Text>
                        </View>

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel")}>
                                <IcnSearch style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </>
            );
            break;
        case 'SignUpVerify':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} />
                    <View style={[Style.MainView, { backgroundColor: GetAppColor.headerLightYellow }]}>
                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.SignUpVerification}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'SignUp':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} />
                    <View style={[Style.MainView, { backgroundColor: GetAppColor.headerLightYellow }]}>
                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.SignupTitle}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'ExpertInsight':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.ExpertInsight}</Text>
                        </View>
                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel", { screen: "EXPERT INSIGHTS" })}>
                                <IcnSearch style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            )
            break;
        case 'MySubmittedIdea':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={Style.txtHeader}>{Label.MySubmitIdea}</Text>
                        </View>

                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel")}>
                                <IcnSearch style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.onFilter()}>
                                <IcnFilter style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                                {props.isFilter ? <View style={Style.redDot} /> : null}
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'LiveChat':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} />
                    <View style={[Style.MainView, { backgroundColor: GetAppColor.headerLightYellow }]}>
                        <BackButton />

                        <View style={Style.container}>
                            <View style={Style.profile}>
                                <ImageLoad
                                    style={Style.subProfile}
                                    resizeMode='cover'
                                    source={{ uri: props.url }}
                                    borderRadius={AppUtil.getHP(2.5)}
                                    placeholderStyle={Style.subProfile}
                                />
                            </View>
                            <View style={Style.chatDetail}>
                                <Text style={Style.chatTxt}>{props.isName}</Text>
                                {/* <Text style={[Style.chatTxt, Style.onlineTxt]}>{Label.Online}</Text> */}
                            </View>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
        case 'Edit Idea':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} />
                    <View style={[Style.MainView, { backgroundColor: GetAppColor.headerLightYellow }]}>
                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.EditIdea}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'NotificationSetting':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={GetAppColor.statusBarYellow} />
                    <View style={[Style.MainView, { backgroundColor: GetAppColor.headerLightYellow }]}>
                        <BackButton />

                        <View style={Style.centerIcnView}>
                            <Text style={Style.txtHeader}>{Label.NotificationsSettings}</Text>
                        </View>
                        <View style={Style.icnEmpty} />
                    </View>
                </>
            );
            break;
        case 'ExpertInsightDetailWithComment':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{props.heading ? props.heading : Label.ExpertInsightsDetail}</Text>
                        </View>

                        <BackButton />

                        <View style={Style.rightIcnView}>
                            {/* <TouchableOpacity>
                                <IcnMultiMsg style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity> */}
                            <TouchableOpacity>
                                {/* <IcnEdit style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} /> */}
                            </TouchableOpacity>
                        </View>

                    </View>
                </>
            )
            break
        case 'Team Collaboration':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.TeamCollaboration}</Text>
                        </View>
                        <BackButton />

                    </View>
                </>
            )
            break
        case 'ChangePassword':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.ChangePassWordHeader}</Text>
                        </View>
                        <BackButton />

                    </View>
                </>
            )
            break
        case 'SpotlightDetail':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{props.heading ? props.heading : Label.SpotlightDetail}</Text>
                        </View>
                        <BackButton />
                        <View style={Style.rightIcnView}></View>
                    </View>
                </>
            )
            break
        case 'SpotlightListing':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{Label.Spotlight}</Text>
                        </View>
                        <MenuButton />

                        <View style={Style.rightIcnView}>
                            <TouchableOpacity onPress={() => navigation.navigate("SearchLabel", { screen: "SPOTLIGHT" })}>
                                <IcnSearch style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </>
            );
            break
        case 'ExpertInsightTypeDetail':
            return (
                <>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} />
                    <View style={[Style.MainView, { backgroundColor: themeColor.headerColor }]}>

                        <View style={Style.middleIcnView}>
                            <Text style={[Style.txtHeader, { color: themeColor.headerFontColor }]}>{props.heading ? props.heading : Label.ExpertInsightsDetail}</Text>
                        </View>

                        <BackButton />

                        <View style={Style.rightIcnView}>
                            {/* <TouchableOpacity>
                                    <IcnMultiMsg style={Style.icnProp} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} />
                                </TouchableOpacity> */}
                            <TouchableOpacity>
                                {/* <IcnEdit style={Style.headerLeftIcn} height={AppUtil.getHP(2.4)} width={AppUtil.getHP(2.4)} /> */}
                            </TouchableOpacity>
                        </View>

                    </View>
                </>
            )
            break
        default: null;
    }
}

export default memo(CommonHeader);





