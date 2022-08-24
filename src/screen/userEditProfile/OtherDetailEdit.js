import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EditUserProfileStyle from './EditUserProfileStyle'
import { Label } from '../../utils/StringUtil'
import IcnClose from '../../assets/svg/IcnClose'
import { AppUtil } from '../../utils/AppUtil'
import { GetAppColor } from '../../utils/Colors'
import { AppConfig } from '../../manager/AppConfig'

const OtherDetailEdit = (props) => {
  const { themeColor } = useSelector((state) => state)
  const [userData, setUserData] = useState(props?.data)
  const [about, setAbout] = useState()
  const [facebookLink, setFacebookLink] = useState()
  const [linkdinLink, setLinkdinLink] = useState()
  const [twitterLink, setTwitterLink] = useState()
  const [category, setCategory] = useState([])
  const [isSelectedLang,setSelectedLang]= useState(true)

  useEffect(() => {
    let _lang = AppConfig.getLanguage();
    setSelectedLang(_lang == "ar" ? true : false)
}, [])
  useEffect(() => {

    setAbout(userData.about)
    setFacebookLink(userData.facebookLink)
    setLinkdinLink(userData.linkdinLink)
    setTwitterLink(userData.twitterLink)
    setCategory(userData.categoryInfo)

  }, [userData])

  const otherDetails = {
    about: about,
    facebookLink: facebookLink,
    linkdinLink: linkdinLink,
    twitterLink: twitterLink,
    category: category
  }
  const onCheckField = () => {
    var obj = {
      about: about,
      facebookLink: facebookLink,
      linkdinLink: linkdinLink,
      twitterLink: twitterLink,
      category: category
    }
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
      props.onNext(obj);
    }
  }
  category ? category : []
  return (
    <ScrollView >
      <View style={[EditUserProfileStyle.cornerView, { marginTop: AppUtil.getHP(2) }]} >
        {/* <Text style={EditUserProfileStyle.titleText}>{Label.Categories}<Text style={{ color: 'red' }}>*</Text></Text>
        <View style={EditUserProfileStyle.scrollSubView}>
          {
           category && category.map((item, index) => {
              return (
                <View style={EditUserProfileStyle.catView1}>
                  <Text style={EditUserProfileStyle.catText1}>{item.category_name}</Text>
                  <IcnClose color={GetAppColor.black} height={AppUtil.getHP(1)} width={AppUtil.getHP(1)} />
                </View>
              )
            })
          }
        </View>
        <TouchableOpacity style={[EditUserProfileStyle.addMoreButton, { borderColor: themeColor.headerColor }]}>
          <Text style={[EditUserProfileStyle.addMoreText, { color: themeColor.headerColor }]}>{Label.AddMore}</Text>
        </TouchableOpacity> */}

        <Text style={EditUserProfileStyle.titleText}>{Label.ShortDiscription}</Text>
        <TextInput
          style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
          value={about}
          onChangeText={(about) => setAbout(about)}
        />

        <Text style={EditUserProfileStyle.titleText}>{Label.FacebookLink}</Text>
        <TextInput
          style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
          value={facebookLink}
          onChangeText={(fLink) => setFacebookLink(fLink)}
        />

        <Text style={EditUserProfileStyle.titleText}>{Label.TwitterLink}</Text>
        <TextInput
          style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
          value={linkdinLink}
          onChangeText={(lLink) => setLinkdinLink(lLink)}
        />

        <Text style={EditUserProfileStyle.titleText}>{Label.LinkdinLink}</Text>
        <TextInput
          style={[EditUserProfileStyle.input,{textAlign: isSelectedLang ? "right":"left"}]}
          value={twitterLink}
          onChangeText={(tLink) => setTwitterLink(tLink)}
        />
        <TouchableOpacity onPress={() => onCheckField()} style={EditUserProfileStyle.submitButton}>
          <Text style={EditUserProfileStyle.submitText}>{Label.SaveAndNext}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default OtherDetailEdit