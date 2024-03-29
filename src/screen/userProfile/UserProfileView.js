import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserProfileStyle from './UserProfileStyle';
import Personal from './Personal';
import OtherDetail from './OtherDetail';
import Expert from './Expert';
import { Service } from '../../service/Service';
import { EndPoints } from '../../service/EndPoints';
import UserProfile from '../../model/UserProfile'
import { deviceId } from '../../utils/Constant';
import { Loger } from '../../utils/Loger';
import { AppConfig, getLanguage } from '../../manager/AppConfig';
import { UserManager } from "../../manager/UserManager";
import { showMessage } from '../../utils/Constant';
import { Label } from '../../utils/StringUtil';

const Tab = createMaterialTopTabNavigator();
const UserProfileView = (props) => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        userProfile();
    }, [])

    const userProfile = () => {
        // alert('in userProfile')
        const data =
        {
            language: getLanguage(),
            frontuser_id: UserManager.userId,
            device_id: deviceId,
            token: AppConfig.token,
        }
        Service.post(EndPoints.getProfile, data, (res) => {

            if (res.statusCode == "1") {
                let model = new UserProfile(res.data)
                setUserData(model)
            }
            else (
                showMessage(res.message)
            )

        },
            (err) => {
                Loger.onLog('err of getProfile', err);
            }
        )
    }
    const onReferesh = () => {
        userProfile();
        // alert('refresh callled at 49')
    }
    const onNavigateRoot = () => {
        if (UserManager.userRole == 1) {
            return (
                <Tab.Navigator screenOptions={{
                    tabBarLabelStyle: UserProfileStyle.tabHeader,
                    tabBarItemStyle: UserProfileStyle.tabBarItem1,
                    tabBarIndicatorStyle: UserProfileStyle.itemBorder,
                }}>
                    <Tab.Screen name={Label.Personal} children={() => <Personal data={userData} />} />
                    <Tab.Screen name={Label.OtherDetail} children={() => <OtherDetail data={userData} />} />
                </Tab.Navigator>
            )
        }
        else {
            return (

                <Tab.Navigator screenOptions={{ tabBarLabelStyle: UserProfileStyle.tabHeader, tabBarItemStyle: UserProfileStyle.tabBarItem2, tabBarIndicatorStyle: UserProfileStyle.itemBorder, }}>
                    <Tab.Screen name={Label.Personal} children={() => <Personal data={userData} />} />
                    <Tab.Screen name={Label.OtherDetail} children={() => <OtherDetail data={userData} />} />
                    <Tab.Screen name={Label.Expert} children={() => <Expert data={userData} />} />
                </Tab.Navigator>
            )
        }
    }
    return (

        <View style={{ flex: 1 }}>
            <SafeAreaView>
                <CommonHeader isType={"UserProfile"} onEditProfile={() => props.navigation.navigate('EditUserProfileView', { data: userData, onReferesh: () => onReferesh() })} />

                <View style={[UserProfileStyle.MainView, { height: '95%' }]}>
                    {/* <NavigationContainer > */}

                    {onNavigateRoot()}

                    {/* </NavigationContainer> */}
                </View>
            </SafeAreaView>
        </View>
    )
}

export default UserProfileView