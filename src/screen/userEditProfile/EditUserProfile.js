import { View, Text, SafeAreaView, } from 'react-native'
import React, { useState, useEffect } from 'react'
import CommonHeader from '../../component/commonheader/CommonHeader'
import EditUserProfileStyle from './EditUserProfileStyle'
import RightCheck from '../../assets/svg/settingIcon/RightCheck'
import { AppUtil } from '../../utils/AppUtil'
import { useSelector } from 'react-redux'
import { GetAppColor } from '../../utils/Colors'
import PersonalEdit from './PersonalEdit'
import OtherDetail from '../userProfile/OtherDetail'
import OtherDetailEdit from './OtherDetailEdit'
import ExpertEdit from './ExpertEdit'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { baseURL, deviceId } from '../../utils/Constant'
import { AppConfig, getLanguage } from '../../manager/AppConfig'
import UserProfile from '../../model/UserProfile'
import { Label } from '../../utils/StringUtil'
import { Loger } from '../../utils/Loger'
import { showMessageWithCallBack, showMessage } from '../../utils/Constant'
import axios from 'axios'
import { UserManager } from '../../manager/UserManager'

const EditUserProfile = (props) => {


    const { themeColor } = useSelector((state) => state)
    const [selectedIndex, SetSelectedIndex] = useState(0)
    const [newData, setNewData] = useState({})
    const [personalData, setPersonalData] = useState(null);
    const [otherData, setOtherData] = useState(null);
    const [updateData, setUpdateData] = useState(props.route.params.data)

    const refresh = () => {
        props.route.params.onReferesh();
        props.navigation.navigate('UserProfileView')
    }
    const onNormalUserSubmit = (obj) => {

        var data = new FormData()

        data.append('device_id', deviceId)
        data.append('lang', getLanguage())
        data.append('token', AppConfig.token)
        data.append('user_categories', '["3", "4"]');

        if (personalData.newUserPhoto != "")
            data.append('user_photo', personalData.newUserPhoto);

        data.append('first_name', personalData.firstName);
        data.append('last_name', personalData.lastName);
        data.append('job_title', personalData.jobTitle);
        data.append('organization_name', personalData.organization);
        data.append('country_id', personalData.countryId);
        data.append('city_id', personalData.cityId);

        data.append('about_expert', obj.about);
        data.append('facebook_link', obj.facebookLink);
        data.append('twitter_link', obj.twitterLink);
        data.append('linkdin_link', obj.linkdinLink);

        Service.postFormDataFetch(EndPoints.editProfile, data, (res) => {
            if (res.statusCode == "1") {
                showMessageWithCallBack(Label.UpdateProfie, () => { refresh() })
            }
            else {
                showMessage(res.message)
            }
        },
            (err) => {
                Loger.onLog("Error of update profile", err);
            }
        )

    }
    const onSubmit = (obj) => {

        var data = new FormData()

        data.append('device_id', deviceId)
        data.append('lang', getLanguage())
        data.append('token', AppConfig.token)
        // data.append('user_categories', '["3", "4"]');
        // data.append('Fees_Type', "hourly");
        // data.append('SME_User_Fees', "250");

        if (personalData.newUserPhoto != "")
            data.append('user_photo', personalData.newUserPhoto);

        data.append('first_name', personalData.firstName);
        data.append('last_name', personalData.lastName);
        data.append('job_title', personalData.jobTitle);
        data.append('organization_name', personalData.organization);
        data.append('country_id', personalData.countryId);
        data.append('city_id', personalData.cityId);

        data.append('about_expert', obj.about);
        data.append('facebook_link', obj.facebookLink);
        data.append('twitter_link', obj.twitterLink);
        data.append('linkdin_link', obj.linkdinLink);
        
        data.append('expertise_brief', obj.description);
        data.append('skills', obj.skill);


        Service.postFormDataFetch(EndPoints.editProfile, data, (res) => {
            if (res.statusCode == "1") {
                showMessageWithCallBack(Label.UpdateProfie, () => { refresh() })
            }
            else {
                showMessage(res.message)
            }
        },
            (err) => {
                Loger.onLog("Error of update profile", err);
            }
        )
    }

    const saveProfile = (props) => {
        if (props.personalEdit) {
            const personalData = props.personalEdit
            setNewData(personalData)
            const { firstName, lastName, jobTitle, organization, userPhoto, cityId, countryId, userType } = personalData
            if (personalData) {
                if (!firstName.trim()) {
                    showMessage(Label.enterfirstname)
                    return false;
                } else if (!lastName.trim()) {
                    showMessage(Label.enterlastname)
                    return false;
                } else if (!organization.trim()) {
                    showMessage(Label.Organization)
                    return false;
                } else if (!jobTitle.trim()) {
                    showMessage(Label.JobTilte)
                    return false;
                } else {
                    SetSelectedIndex(1)
                }
            }
        }
        else if (props?.otherDetails) {
            const otherData = props.otherDetails
            const updateOtherData = { ...newData, ...otherData }
            setNewData(updateOtherData)
            const { about, facebookLink, twitterLink, linkdinLink } = updateOtherData
            if (updateOtherData) {
                if (!about.trim()) {
                    showMessage(Label.enterfirstname)
                    return false;
                } else if (!facebookLink.trim()) {
                    showMessage(Label.Organization)
                    return false;
                } else if (!twitterLink.trim()) {
                    showMessage(Label.Organization)
                    return false;
                } else if (!linkdinLink.trim()) {
                    showMessage(Label.Organization)
                    return false;
                } else {
                    SetSelectedIndex(2)
                }

            }

        }
        else if (props?.expertDetail) {

            const expertData = props.expertDetail
            const updateExpertData = { ...newData, ...expertData }
            setNewData(updateExpertData)

            const { firstName, lastName, jobTitle, organization, userPhoto, countryId,
                about, category, facebookLink, linkdinLink, twitterLink,
                description, skill, cityId } = updateExpertData

            // if (updateExpertData) {
            //     if (!skill.trim()) {
            //         showMessage(Label.enterfirstname)
            //         return false;
            //     } else if (!description.trim()) {
            //         showMessage(Label.Organization)
            //         return false;
            //     }
            // }

            const data = new FormData()

            data.append('device_id', deviceId);
            data.append('lang', getLanguage());
            data.append('token', AppConfig.token);
            data.append('first_name', firstName);
            data.append('last_name', lastName);
            data.append('job_title', jobTitle);
            data.append('organization_name', organization);
            data.append('country_id', countryId);
            data.append('city_id', cityId);
            // data.append('user_photo', userPhoto)
            data.append('user_categories', '["3", "4"]');
            data.append('about_expert', about);
            data.append('expertise_brief', description);
            data.append('facebook_link', facebookLink);
            data.append('linkdin_link', linkdinLink);
            data.append('Fees_Type', "hourly");
            data.append('SME_User_Fees', "250");
            data.append('twitter_link', twitterLink);
            data.append('skills', skill);


            Service.postFormDataFetch(EndPoints.editProfile, data, (res) => {
                if (res.statusCode == "1") {
                    showMessageWithCallBack(Label.UpdateProfie, () => {
                        refresh()
                    })
                }
                else {
                    showMessage(res.message)
                }
            },
                (err) => {
                    Loger.onLog("Error of update profile", err);
                }
            )



        }

    }

    const renderPersonalSlideNormalUser = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>

            <View style={EditUserProfileStyle.line2} />

            <View style={[EditUserProfileStyle.rightCheckView, { backgroundColor: GetAppColor.white }]}>
            </View>
        </View>
    )

    const renderotherDetailSlideNormalUser = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
            <View style={EditUserProfileStyle.line2} />

            <View style={[EditUserProfileStyle.rightCheckView]}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
        </View>
    )

    const renderPersonalSlide = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView, { backgroundColor: GetAppColor.white }]}>
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView, { backgroundColor: GetAppColor.white }]}>
            </View>
        </View>
    )

    const renderotherDetailSlide = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView]}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView, { backgroundColor: GetAppColor.white }]}>
            </View>
        </View>
    )

    const renderExpertSlide = () => (
        <View style={EditUserProfileStyle.roundSlide}>
            <View style={EditUserProfileStyle.rightCheckView}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
            <View style={EditUserProfileStyle.line} />



            <View style={[EditUserProfileStyle.rightCheckView]}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>

            <View style={EditUserProfileStyle.line} />

            <View style={[EditUserProfileStyle.rightCheckView]}>
                <RightCheck height={AppUtil.getHP(2.25)} width={AppUtil.getHP(2.25)} color={themeColor.headerColor} />
            </View>
        </View>
    )
    if (UserManager.userRole == 1) {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CommonHeader isType={"UserEditProfile"} />
                <View style={EditUserProfileStyle.slideView}>
                    {
                        selectedIndex == 0 ? renderPersonalSlideNormalUser() : renderotherDetailSlideNormalUser()
                    }
                    <View style={EditUserProfileStyle.textLineView2}>
                        <Text style={EditUserProfileStyle.slideText}>{Label.Personal}</Text>
                        <Text style={EditUserProfileStyle.slideText}>{Label.OtherDetail}</Text>
                    </View>
                </View>
                {
                    selectedIndex == 0 ?
                        <PersonalEdit data={updateData} onNext={(obj) => { setPersonalData(obj); SetSelectedIndex(selectedIndex + 1); }} />
                        :
                        <OtherDetailEdit data={updateData} onNext={(obj) => { onNormalUserSubmit(obj) }} />
                }
            </SafeAreaView>
        )
    }
    else {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <CommonHeader isType={"UserEditProfile"} />
                <View style={EditUserProfileStyle.slideView}>
                    {
                        selectedIndex == 0 ? renderPersonalSlide() :
                            selectedIndex == 1 ? renderotherDetailSlide()
                                : renderExpertSlide()
                    }

                    <View style={EditUserProfileStyle.textLineView}>
                        <Text style={EditUserProfileStyle.slideText}>{Label.Personal}</Text>
                        <Text style={EditUserProfileStyle.slideText}>{Label.OtherDetail}</Text>
                        <Text style={EditUserProfileStyle.slideText}>{Label.Expert}</Text>
                    </View>
                </View>

                {
                    selectedIndex == 0 ? <PersonalEdit onNext={(obj) => { setPersonalData(obj); SetSelectedIndex(selectedIndex + 1); }} data={updateData} />
                        : selectedIndex == 1 ? <OtherDetailEdit onNext={(obj) => { setOtherData(obj); SetSelectedIndex(selectedIndex + 1); }} data={updateData} />
                            : <ExpertEdit onNext={(obj) => onSubmit(obj)} data={updateData} />
                }





            </SafeAreaView>
        )
    }

}

export default EditUserProfile