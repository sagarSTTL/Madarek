import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import ExpertProfile from '../../component/expertscreen/ExpertProfile';
import ExpertInsights from '../../component/expertscreen/ExpertInsights';
import SimilarExperts from '../../component/expertscreen/SimilarExperts';

import Style from './ExpertDetailsStyle';
import { Label } from '../../utils/StringUtil';
import { GetAppColor } from '../../utils/Colors';

function ExpertDetailsScreen() {
    const { themeColor } = useSelector((state) => state)

    return (
        <SafeAreaView style={Style.SafeAryView}>
            <CommonHeader isType={"ExpertDetailsScreen"} onManuClick={() => null} />
            <View style={Style.MainView}>
                <ScrollView>
                    <ExpertProfile data={testProfileData} />
                    <ExpertInsights data={expertInsightsData} />
                    
                    <View style={Style.similarExpertView}>
                        <SimilarExperts data={expertInsightsData} maxLimit={2} title={Label.SimilarExperts} />
                    </View>

                    <View style={Style.footerView}>
                        <Text style={Style.txtTitle}>{Label.ExpertDes}</Text>
                        <View style={Style.btnView}>
                            <TouchableOpacity style={[Style.btnLearMore, { borderColor: themeColor.buttonColor }]}>
                                <Text style={[Style.txt, { color: themeColor.buttonColor }]}>{Label.LearnMore}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[Style.btnApplyNow, { backgroundColor: themeColor.buttonColor }]}>
                                <Text style={[Style.txt, { color: GetAppColor.white }]}>{Label.ApplyNow}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default memo(ExpertDetailsScreen);

const testProfileData = {
    profilePic: 'https://i.imgur.com/5tj6S7Ol.jpg',
    name: 'Abhimanyu Ramunuj',
    job: 'Senior Manager, Insights',
    see: '700',
    like: '210',
    comment: '180',
    expert: ["Renewable Energy", 'Health', 'Family Business', 'Banking and Finance', 'Education', 'Information Technology', 'Constuction and infrastucture'],
    About: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit in neque at aliquet sit consectetur. Elit ut augue ornare laoreet. in porttitor enim, nulla sagittis. lobortis mauris, gravida Cursus Volutpat volutpat mauris. Arcu morbi dolor sit emet, consectetur adipiscing elit. sit in neque at aliquet sit consectetur. Elit ut augue ornare laoreet. In porttitor enim,"
};

const expertInsightsData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development Development Development Development Development Development Development Development',
        des: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development',
        des: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: "Khalid AI Rahbi",
        post: 'Senior Manager, Insights',
        title: 'Special Education',
        subTitle: 'Supporting Autism Children Development',
        des: "Innovation and Creativty Private Sector Quality of Living, Remewable Energy",
        url: 'https://i.imgur.com/5tj6S7Ol.jpg',
        date: "25 Jan 22",
        min: "57 min read",
        see: '700',
        like: '200',
        comment: '80',
        isLike: false,
    },

];