import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import IcnClose from '../../assets/svg/IcnClose'
import { GetAppColor } from '../../utils/Colors'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import EditUserProfileStyle from './EditUserProfileStyle'

const ExpertEdit = (props) => {
    const { themeColor } = useSelector((state) => state)

    return (
        <ScrollView >
            <View style={[EditUserProfileStyle.cornerView, { marginTop: AppUtil.getHP(2) }]} >
                <Text style={[EditUserProfileStyle.titleText, { marginTop: 0 }]}>{Label.Categories}<Text style={{ color: 'red' }}>*</Text></Text>
                <View style={EditUserProfileStyle.scrollSubView}>
                    {
                        [1, 2, 3, 4, 5, 6].map((item, index) => {
                            return (
                                <View style={EditUserProfileStyle.catView1}>
                                    <Text style={EditUserProfileStyle.catText1}>Health</Text>
                                    <IcnClose color={GetAppColor.black} height={AppUtil.getHP(1)} width={AppUtil.getHP(1)} />
                                </View>
                            )
                        })
                    }
                </View>
                <TouchableOpacity style={[EditUserProfileStyle.addMoreButton, { borderColor: themeColor.headerColor }]}>
                    <Text style={[EditUserProfileStyle.addMoreText, { color: themeColor.headerColor }]}>{Label.AddMore}</Text>
                </TouchableOpacity>

                <Text style={EditUserProfileStyle.titleText}>{Label.Skill}</Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />

                <Text style={EditUserProfileStyle.titleText}>{Label.Biography}</Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />

                <Text style={EditUserProfileStyle.titleText}>{Label.Description}<Text style={{ color: 'red' }}>*</Text></Text>
                <TextInput
                    style={EditUserProfileStyle.input}
                />
                <TouchableOpacity onPress={() => { props.saveNext() }} style={EditUserProfileStyle.submitButton}>
                    <Text style={EditUserProfileStyle.submitText}>{Label.Submit}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ExpertEdit