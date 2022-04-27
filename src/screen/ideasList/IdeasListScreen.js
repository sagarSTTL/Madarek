import React, { memo } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import Style from "./IdeasListStyle";

import AllIdeas from '../../component/homescreen/itemList/ViewMoreIdeas'
import { Label } from "../../utils/StringUtil";
import { GetAppColor } from "../../utils/Colors";
const Tab = createMaterialTopTabNavigator();

const IdeasListScreen = (props) => {

    return (
        <SafeAreaView style={Style.container}>
            <CommonHeader isType={"IdeasListScreen"} onMenuClick={() => { props.navigation.openDrawer() }} />

            <View style={Style.MainView}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator screenOptions={{
                       tabBarLabelStyle: Style.tabHeader,
                       tabBarItemStyle: Style.tabBarItem,
                       tabBarIndicatorStyle: Style.itemBorder,
                       tabBarScrollEnabled: true
                    }}
                    >
                        <Tab.Screen name={Label.All} children={() => <AllIdeas navigateDetail={()=>props.navigation.navigate('IdeaDetails')} propName={{ type: "AllIdeas", data: sliderdata }} />} />
                        <Tab.Screen name={Label.Latest} children={() => <AllIdeas navigateDetail={()=>props.navigation.navigate('IdeaDetails')} propName={{ type: "LatestIdeas", data: sliderdata }} />} />
                        <Tab.Screen name={Label.Popular} children={() => <AllIdeas navigateDetail={()=>props.navigation.navigate('IdeaDetails')} propName={{ type: "PopularIdeas", data: sliderdata }} />} />
                        <Tab.Screen name={Label.Winning} children={() => <AllIdeas navigateDetail={()=>props.navigation.navigate('IdeaDetails')} propName={{ type: "WinningIdeas", data: sliderdata }} />} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>
        </SafeAreaView>
    );
}

export default memo(IdeasListScreen);

const sliderdata = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: 'Poonam',
        lastName:'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        firstName: 'Poonam',
        lastName:'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        firstName: 'Poonam',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        firstName: 'Poonam',
        lastName:'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                lastName:'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        firstName: 'Poonam',
        lastName:'Madhav',
        ideaTitle: 'Banking and Finance',
        categoryName: 'Children Omani Dress Competition',
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },

];










