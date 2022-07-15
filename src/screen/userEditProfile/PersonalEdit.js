import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import EditUserProfileStyle from './EditUserProfileStyle'
import { useSelector } from 'react-redux'
import Camera from '../../assets/svg/myaccount/Camera'
import { Label } from '../../utils/StringUtil'
import { AppUtil } from '../../utils/AppUtil'
import CountryPicker from 'react-native-country-picker-modal'
import { Service } from '../../service/Service'
import { EndPoints } from '../../service/EndPoints'
import { Loger } from '../../utils/Loger'
import Country from '../../model/Country'
import IcnUpArrow from '../../assets/svg/drawerIcon/IcnUpArrow'
import DownArrow from '../../assets/svg/DownArrow'
import { Modal } from 'react-native'
import City from '../../model/City'

const PersonalEdit = (props) => {
    const { themeColor } = useSelector((state) => state)
    const [userData, setUserData] = useState(props.data)
    const [userType, setUserType] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [organization, setOrganization] = useState()
    const [jobTitle, setJobTitle] = useState()
    const [email, setEmail] = useState()
    const [countryName, setCountryName] = useState()
    const [city, setCity] = useState()
    const [number, setNumber] = useState()
    const [userPhoto, setUserPhoto] = useState()

    const [country, setCountry] = useState()
    const [countryIndex, setCountryIndex] = useState(1)
    const [cityIndex, setCityIndex] = useState(1)
    const [selectLanguage, setSelectLanguage] = useState();
    const [countryData, setCountryData] = useState();
    const [cityData, setCityData] = useState();
    const [cityName, setCityName] = useState()
    const [countryId, setCountryId] = useState()
    const [cityId, setCityId] = useState()
    
    useEffect(() => {

        setUserType(userData.userType)
        setFirstName(userData.firstName)
        setLastName(userData.lastName)
        setOrganization(userData.organization)
        setJobTitle(userData.jobTitle)
        setEmail(userData.email)
        setCountryName(userData.countryName)
        setCity(userData.city)
        setNumber(userData.number)
        setUserPhoto(userData.userPhoto)

    }, [userData])

    useEffect(() => {
        selectCountry()
        selectCity()
        onSelectCity();
    }, [])

    const onSelectCountry = (index) => {

        selectLanguage ? setCountryData(country[index]) : null
    }
    const onSelectCity = (index) => {
        selectLanguage ? setCityData(cityName[index]) : null
    }

    const selectCountry = () => {

        Service.get(EndPoints.countries, (res) => {
            Loger.onLog('Response of countries', res)
            const countryData = []
            if (res.statusCode == "1") {
                res.data.map((item) => {
                    let model = new Country(item)
                    countryData.push(model)
                    setCountry(countryData)
                })
            }
        },
            (err) => {
                Loger.onLog('Error of countries', err)
            }
        )
    }

    const selectCity = () => {
        Service.get(EndPoints.cities, (res) => {
            Loger.onLog('Response of cities', res.data)
            const cityData = []
            if (res.statusCode == "1") {
                res.data.map((item) => {
                    let model = new City(item)
                    cityData.push(model)
                    setCityName(cityData)
                })
            }
        },
            (err) => {
                Loger.onLog('Error of cities', err)
            }
        )
    }

    let personalEdit = {
        userType: userType,
        firstName: firstName,
        lastName: lastName,
        organization: organization,
        jobTitle: jobTitle,
        email: email,
        country: countryName,
        city: city,
        number: number,
        userPhoto: userPhoto,
        countryId: countryId,
        cityId:cityId
    }

    const renderCountry = () => {
        return (
            <View style={EditUserProfileStyle.dropDown}>
                {
                    <FlatList
                        data={country}
                        keyExtractor={(item) => item.id}
                        // contentContainerStyle={{ flexGrow: 1}}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity TouchableOpacity style={EditUserProfileStyle.selections} onPress={() => { setSelectLanguage(index), setCountryIndex(1), onSelectCountry(index), setCountryId(item.id) }} >
                                    <Text style={EditUserProfileStyle.label}>{item.countryName}{` (+${item.countryCode})`}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                  
                }
            </View >
        )
    }
    const renderCity = () => {
        return (
            <View style={[EditUserProfileStyle.dropDown,{height:AppUtil.getHP(30)}]}>
                 <FlatList
                        data={cityName}
                        scrollEnabled={true}
                        keyExtractor={(item) => item.id}
                        // contentContainerStyle={{ flexGrow:1}}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity TouchableOpacity style={[EditUserProfileStyle.selections]} onPress={() => { setSelectLanguage(index), setCityIndex(1), onSelectCity(index),setCityId(item.id) }} >
                                    <Text style={EditUserProfileStyle.label}>{item.city}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />   
            </View >
        )
    }
    const toggleCity = () => {
        cityIndex == 0 ? setCityIndex(1) : setCityIndex(0)
    }
    const toggleCountry = () => {
        countryIndex == 0 ? setCountryIndex(1) : setCountryIndex(0)
    }
    return (
        <ScrollView >
            <View style={EditUserProfileStyle.cornerView} >

                <View style={EditUserProfileStyle.imageView}>
                    <Image style={EditUserProfileStyle.userEditImage}
                        source={{ uri: userPhoto }}
                    />
                    <TouchableOpacity style={[EditUserProfileStyle.cameraIconBtn, { backgroundColor: themeColor.headerColor }]}>
                        <Camera height={AppUtil.getHP(2.5)} width={AppUtil.getHP(2.5)} />
                    </TouchableOpacity>
                </View>

                <View style={EditUserProfileStyle.contentView}>

                    <Text style={EditUserProfileStyle.titleText}>{Label.UserType}</Text>
                    <TextInput
                        style={EditUserProfileStyle.input}
                        multiline={false}
                        value={userType}
                        onChangeText={(useType) => setUserType(useType)}
                    />

                    <View style={EditUserProfileStyle.editFlexView}>
                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.Name}<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={EditUserProfileStyle.input}
                                value={firstName}
                                onChangeText={(firstName) => setFirstName(firstName)}
                            />
                        </View>

                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.lastname}<Text style={{ color: 'red' }}>*</Text></Text>
                            <TextInput
                                style={EditUserProfileStyle.input}
                                value={lastName}
                                onChangeText={(lastName) => setLastName(lastName)}
                            />
                        </View>
                    </View>

                    <Text style={EditUserProfileStyle.titleText}>{Label.OrganizationName}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={EditUserProfileStyle.input}
                        value={organization}
                        onChangeText={(organization) => setOrganization(organization)}
                    />

                    <Text style={EditUserProfileStyle.titleText}>{Label.JobTitle}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={EditUserProfileStyle.input}
                        value={jobTitle}
                        onChangeText={(jobTitle) => setJobTitle(jobTitle)}
                    />

                    <Text style={EditUserProfileStyle.titleText}>{Label.EmailTitle}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={EditUserProfileStyle.input}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />

                    <View style={EditUserProfileStyle.editFlexView}>
                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.Country}<Text style={{ color: 'red' }}>*</Text></Text>
                            {/* <TextInput
                                style={EditUserProfileStyle.input}
                                value={countryName}
                                onChangeText={(countryName) => setCountryName(countryName)}
                            > */}
                            <View style={[EditUserProfileStyle.input]}>
                                {countryIndex == 0 ? renderCountry() : null}
                                <TouchableOpacity onPress={toggleCountry} style={EditUserProfileStyle.container}>

                                    {/* <View style={STYLES.itemIcon}>
                                        <GoogleIcon height={AppUtil.getHP(3)} width={AppUtil.getHP(3)} />
                                    </View> */}

                                    <TextInput
                                        style={EditUserProfileStyle.input}
                                        keyboardAppearance={false}
                                        value={countryData?.countryName || "Oman"}
                                        editable={false}

                                    />

                                    {
                                        countryIndex == 0 ?
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <IcnUpArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                            :
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <DownArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                    }


                                </TouchableOpacity>
                            </View>
                            {/* </TextInput> */}
                        </View>

                        <View style={EditUserProfileStyle.editPartView}>
                            <Text style={EditUserProfileStyle.titleText}>{Label.City}<Text style={{ color: 'red' }}>*</Text></Text>
                            <View style={[EditUserProfileStyle.input]}>
                                {cityIndex == 0 ? renderCity() : null}
                                <TouchableOpacity onPress={toggleCity} style={EditUserProfileStyle.container}>


                                    <TextInput
                                        style={[EditUserProfileStyle.input, EditUserProfileStyle.addWidth]}
                                        keyboardAppearance={false}
                                        value={cityData?.city || "Matrah"}
                                        editable={false}


                                    />
{console.log('cityData[0].city',cityData)}
                                    {
                                        cityIndex == 0 ?
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <IcnUpArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                            :
                                            <View style={EditUserProfileStyle.upArrowIcon}>
                                                <DownArrow height={AppUtil.getHP(1.6)} width={AppUtil.getHP(1.6)} />
                                            </View>
                                    }


                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Text style={EditUserProfileStyle.titleText}>{Label.MobileNumber}<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        style={EditUserProfileStyle.input}
                        value={number}
                        onChangeText={(number) => setNumber(number)}
                    />

                    <TouchableOpacity onPress={() => { props.saveNext(), props.saveProfile({ personalEdit: personalEdit }) }} style={EditUserProfileStyle.submitButton}>
                        <Text style={EditUserProfileStyle.submitText}>{Label.SaveAndNext}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}

export default PersonalEdit