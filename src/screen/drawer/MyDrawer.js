import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, SafeAreaView } from 'react-native'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppUtil } from '../../utils/AppUtil'
import IcnMenuHeader from '../../assets/svg/IcnMenuHeader'
import IcnClose from '../../assets/svg/IcnClose'
import FONTS from '../../utils/Fonts'
import { GetAppColor } from '../../utils/Colors'
import HomeIcn from '../../assets/svg/drawerIcon/HomeIcn'
import IdeaIcn from '../../assets/svg/drawerIcon/IdeaIcn'
import DownArrow from '../../assets/svg/DownArrow'
import UserIcn from '../../assets/svg/drawerIcon/UserIcn'
import EnterpriseIcn from '../../assets/svg/drawerIcon/EnterpriseIcn'
import HowItWorksIcn from '../../assets/svg/drawerIcon/HowItWorksIcn'
import PartnerIcn from '../../assets/svg/drawerIcon/PartnerIcn'
import SettingIcn from '../../assets/svg/drawerIcon/SettingIcn'
import drawerStyles from './DrawerStyles'
import IcnUpArrow from '../../assets/svg/drawerIcon/IcnUpArrow'
import { Label } from '../../utils/StringUtil'
import MyAccount from '../../assets/svg/drawerIcon/MyAccount'
import LogoutIcn from '../../assets/svg/drawerIcon/LogoutIcn'
import ChallengeIcn from '../../assets/svg/drawerIcon/ChallengeIcn'
import { UserManager } from '../../manager/UserManager'
import ImageLoad from 'react-native-image-placeholder'
import { Service } from '../../service/Service'
import { deviceId, showMessageWithAnotherCallBack, showMessageWithCallBack } from '../../utils/Constant'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'
import Login from '../../model/Login'
import { AppConfig, getCorporateProfile, getLanguage, setBaseURL, setCorporateProfile } from '../../manager/AppConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MenuTrigger, Menu, MenuOption, MenuOptions } from 'react-native-popup-menu'
import IcnGlobe from "../../assets/svg/IcnGlobe"
import { showMessageWithCancelCallBack } from '../../utils/Constant'
import { StackActions, NavigationActions } from '@react-navigation/native'

const MyDrawerScreen = (props) => {
  const { themeColor } = useSelector((state) => state)
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const [isSelectCorporate, setSelectCorporate] = useState([]);

  const _lang = getLanguage();

  const onSelectMenu = (index) => {
    if (index == selectedIndex) {
      setSelectedIndex(0)
    } else {
      setSelectedIndex(index)
    }
  }
  const onselectButtonMenu = (index, screen, tab) => {

    if (screen) {
      if (index == 9) {
        props.navigation.push(screen);
      } else {
        props.navigation.replace(screen, tab);

      }
      props.navigation.closeDrawer()
    }

    setSelectedButtonIndex(index)

  }

  const isLogOut = () => {
    showMessageWithAnotherCallBack(Label.LogOutCall, (value) => {
      if (value == "CANCEL") {
        return;
      }

      setCorporateProfile("");
      onLogoutPressed()
    })
  }

  const onLogoutPressed = () => {
    const data = {
      "language": getLanguage(),
      "frontuser_id": UserManager.userId,
      "device_id": deviceId,
      "token": AppConfig.token
    }
    Service.post(EndPoints.logout, data, (res) => {

      AsyncStorage.setItem('@user', JSON.stringify(null))
      props.navigation.closeDrawer();
      setBaseURL('http://madarek.io/apiv1/');
      props.navigation.dispatch(StackActions.replace('LoginRoot'));

    }, (err) => {
      Loger.onLog('Drawer Logout error', err);
    })
  }

  const renderCollapseView = () => {
    return (
      <View>
        {
          [Label.All, Label.LatestIdeas, Label.PopularIdeas, Label.WinningIdeas].map((item, index) => {
            return (
              <TouchableOpacity style={[drawerStyles.subMenuButton, { marginVertical: AppUtil.getHP(1), }]} onPress={() => onselectButtonMenu(2, "IdeasListScreen", index)}>
                <Text style={drawerStyles.menuText}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
        <View style={drawerStyles.greyLine}></View>

      </View>
    )
  }

  const renderChallangeCollapseView = () => {
    return (
      <View>
        {
          [Label.Open, Label.Upcoming, Label.Closed].map((item, index) => {
            return (
              <TouchableOpacity style={[drawerStyles.subMenuButton, { marginVertical: AppUtil.getHP(1), }]} onPress={() => onselectButtonMenu(3, "ChallengesListScreen", index)}>
                <Text style={drawerStyles.menuText}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
        <View style={drawerStyles.greyLine}></View>

      </View>
    )
  }

  const onGetGlobelData = () => {
    if (isSelectCorporate.length === 0) {

      const data = {
        "frontuser_id": UserManager.userId,
        "layout": "globe",
        "limit": "100",
        "page": "1",
        "language": getLanguage(),

      }
      Service.post(EndPoints.globe, data, (res) => {
        setSelectCorporate(res.data);
      }, (err) => {
        Loger.onLog('Drawer Logout error', err);
      })
    }



  }

  const onSelectSector = (user_image, corporateInternal) => {

    AsyncStorage.getItem("@user").then((response) => {
      if (response != 'null' && response != null) {

        const res = JSON.parse(response);

        if (corporateInternal == "Global") {

          setCorporateProfile("")
          res.data.corporate_profile = "";

          res.data.corporateSubDomain = "";

          setBaseURL('http://madarek.io/apiv1/');
          setSelectCorporate([]);
          AsyncStorage.setItem('@user', JSON.stringify(res))
          onselectButtonMenu(1, "HomeScreen", -1);
        }
        else {
          setCorporateProfile(user_image)
          res.data.corporate_profile = user_image;

          res.data.corporateSubDomain = corporateInternal;
          setBaseURL('http://' + corporateInternal + '.madarek.io/apiv1/');
          setSelectCorporate([]);

          AsyncStorage.setItem('@user', JSON.stringify(res))
          onselectButtonMenu(1, "HomeScreen", -1);
        }

      }

    });

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ flex: 1 }}> */}

      {/* header */}
      <StatusBar barStyle="light-content" hidden={false} backgroundColor={themeColor.statusBarColor} translucent={false} />
      <View style={{ backgroundColor: themeColor.headerColor, }}>
        <View style={drawerStyles.headerView}>
          <View style={drawerStyles.centerIcnView}>
            {getCorporateProfile() == "" ?
              <IcnMenuHeader height={AppUtil.getHP(5)} width={AppUtil.getHP(20)} />
              :
              <ImageLoad style={drawerStyles.headerProfile1} resizeMode='contain' source={{ uri: getCorporateProfile() }} />
            }
            <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
              <IcnClose height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            </TouchableOpacity>
          </View>
          <View style={[drawerStyles.yellowLineView, { backgroundColor: themeColor.headerFontColor, }]} />
        </View>

        <View style={[drawerStyles.profileView]}>
          {/* <Image style={drawerStyles.profileImage} /> */}

          <View style={drawerStyles.profileImageView}>
            <ImageLoad style={drawerStyles.profileImage} source={{ uri: UserManager.profilePicture }} isShowActivity={false} />
          </View>

          <TouchableOpacity style={{ marginStart: 5 }} onPress={() => props.navigation.navigate('UserProfileView')}>
            <Text style={drawerStyles.welcomeText}>{Label.Welcome}</Text>
            <Text style={drawerStyles.userNameText}>{UserManager.userName}</Text>
          </TouchableOpacity>
        </View>
        <View style={drawerStyles.bothSideView}>
          <View style={drawerStyles.leftItem}>
            <TouchableOpacity onPress={() => props.navigation.navigate(UserManager.userRole == 1 ? 'UserDashboardScreen' : 'SmeDashboardScreen')} style={drawerStyles.dashBoardButton}>
              <Text style={drawerStyles.dashText}>{Label.Dashboard}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('SubmitIdeaScreen')} style={[drawerStyles.dashBoardButton, { marginStart: 5 }]}>
              <Text style={drawerStyles.dashText}>{Label.SubmitIdea}</Text>
            </TouchableOpacity>
          </View>
          <View style={drawerStyles.menuContainer}>

            {UserManager.userRole === 2 &&

              <Menu>
                <MenuTrigger style={[{ height: AppUtil.getHP(3), width: AppUtil.getHP(3) }]} onPress={() => onGetGlobelData()}>
                  <IcnGlobe height={AppUtil.getHP(3.5)} width={AppUtil.getHP(3.5)} stroke={GetAppColor.white} />
                </MenuTrigger>
                <MenuOptions>
                  {isSelectCorporate.map((obj) => {


                    return (
                      <MenuOption onSelect={() => { onSelectSector(obj?.user_image, obj?.corporate_internal) }}>
                        <Text style={drawerStyles.selectItem}>{obj?.corporate_internal}</Text>
                      </MenuOption>
                    )
                  })}
                </MenuOptions>
              </Menu>
            }

          </View>
        </View>
      </View>


      {/*  */}

      <TouchableOpacity onPress={() => { onselectButtonMenu(1, "HomeScreen", -1); onSelectMenu(0); }} style={[drawerStyles.menuButton, { marginTop: AppUtil.getHP(1) }]}>
        <HomeIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText, { fontFamily: selectedButtonIndex == 1 ? FONTS.robotBold : FONTS.robotRegular, }]}>{Label.Home}</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => { onSelectMenu(1) }} style={[drawerStyles.menuButton, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <IdeaIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={[drawerStyles.menuText, { fontFamily: selectedButtonIndex == 2 ? FONTS.robotBold : FONTS.robotRegular, }]}>{Label.Ideas}</Text>
        </View>
        {
          selectedIndex == 1 ?
            <IcnUpArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            :
            <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
        }

      </TouchableOpacity>

      {selectedIndex == 1 ? renderCollapseView() : null}


      <TouchableOpacity onPress={() => { onSelectMenu(2); onselectButtonMenu(3) }} style={[drawerStyles.menuButton, { justifyContent: 'space-between' }]}>
        <View style={{ flexDirection: 'row' }}>
          <ChallengeIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
          <Text style={[drawerStyles.menuText, { fontFamily: selectedButtonIndex == 3 ? FONTS.robotBold : FONTS.robotRegular, }]}>{Label.Challenges}</Text>
        </View>
        {
          selectedIndex == 2 ?
            <IcnUpArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
            :
            <DownArrow height={AppUtil.getHP(2)} width={AppUtil.getHP(2)} />
        }
      </TouchableOpacity>

      {
        selectedIndex == 2 ? renderChallangeCollapseView() : null
      }
      <TouchableOpacity onPress={() => onselectButtonMenu(4, "UserCategory", -1)} style={drawerStyles.menuButton}>
        <UserIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText, { fontFamily: selectedButtonIndex == 4 ? FONTS.robotBold : FONTS.robotRegular, }]}>{Label.Experts}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onselectButtonMenu(6)} style={drawerStyles.menuButton}>
        <HowItWorksIcn height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText, { fontFamily: selectedButtonIndex == 6 ? FONTS.robotBold : FONTS.robotRegular, }]}>{Label.HowitWorks}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onselectButtonMenu(8, 'MyAccount', -1)} style={drawerStyles.menuButton}>
        <MyAccount height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
        <Text style={[drawerStyles.menuText, { fontFamily: selectedButtonIndex == 8 ? FONTS.robotBold : FONTS.robotRegular, }]}>{Label.MyAccount}</Text>
      </TouchableOpacity>

      <View style={drawerStyles.bottomView}>
        <TouchableOpacity onPress={() => onselectButtonMenu(9, 'Setting', -1)} style={drawerStyles.settingButton}>
          <SettingIcn height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={drawerStyles.settingText}>{Label.Settings}</Text>
        </TouchableOpacity>
        <View style={drawerStyles.line} />

        <TouchableOpacity style={drawerStyles.settingButton} onPress={() => isLogOut()}>
          <LogoutIcn style={{ transform: [{ rotate: _lang == 'ar' ? '180deg' : '0deg' }] }} height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
          <Text style={drawerStyles.settingText}>{Label.Logout}</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </SafeAreaView>
  )
}

export default memo(MyDrawerScreen);



