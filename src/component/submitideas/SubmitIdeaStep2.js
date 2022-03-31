import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { memo, useState } from 'react'
import { Label } from '../../utils/StringUtil'
import Style from './IdeaStepStyle'
import { useSelector } from 'react-redux'
import { GetAppColor } from '../../utils/Colors'


function SubmitIdeaStep2(props) {

    const { themeColor } = useSelector((state) => state);
    
    const [selectedIndex, setSelectedIndex] = useState(5);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onCheckField = () => {
        let gender = "";
        if(selectedIndex == 0) gender = "Male";
        else if(selectedIndex == 1) gender = "Female";    
        else if(selectedIndex == 2) gender = "Other";    

        var obj = { firstName: firstName, lastName: lastName, gender: gender, email: email }
        props.onNext(obj);
    }
    return (
        <View style={Style.MainView}>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{"First Name"}<Text style={Style.txtStar}>*</Text></Text>
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtInputTitle}
                    value={firstName}
                    onChangeText={title => setFirstName(title)}
                />
            </View>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{"Last Name"}<Text style={Style.txtStar}>*</Text></Text>
                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtInputTitle}
                    value={lastName}
                    onChangeText={title => setLastName(title)}
                />
            </View>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{"Gender"}<Text style={Style.txtStar}>*</Text></Text>

                <View style={Style.selectGender}>

                    <TouchableOpacity onPress={() => setSelectedIndex(0)} style={[Style.tcOptions,{marginStart:0}]}>
                        {
                            selectedIndex == 0 ?
                                <View style={Style.yellowBorderView}>
                                    <View style={Style.yellowFillView} />
                                </View>
                                :
                                <View style={Style.grayBorderView} />
                        }
                        <Text style={Style.txtOptions}>{"Male"}</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedIndex(1)} style={Style.tcOptions}>
                        {
                            selectedIndex == 1 ?
                                <View style={Style.yellowBorderView}>
                                    <View style={Style.yellowFillView} />
                                </View>
                                :
                                <View style={Style.grayBorderView} />
                        }
                        <Text style={Style.txtOptions}>{"Female"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setSelectedIndex(2)} style={Style.tcOptions}>
                        {
                            selectedIndex == 2 ?
                                <View style={Style.yellowBorderView}>
                                    <View style={Style.yellowFillView} />
                                </View>
                                :
                                <View style={Style.grayBorderView} />
                        }
                        <Text style={Style.txtOptions}>{"Other"}</Text>
                    </TouchableOpacity>

                </View>
                
            </View>

            <View style={Style.innerFirstView}>
                <Text style={Style.txtTitle}>{"Email Id"}<Text style={Style.txtStar}>*</Text></Text>

                <TextInput
                    placeholderTextColor={GetAppColor.grayBorder}
                    numberOfLines={2}
                    multiline={true}
                    style={Style.txtInputTitle}
                    value={email}
                    onChangeText={title => setEmail(title)}
                />

            </View>

            <TouchableOpacity style={[Style.btn, { backgroundColor: themeColor.buttonColor }]} onPress={() => onCheckField()}>
                <Text style={Style.txtBtn}>{Label.Continue}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(SubmitIdeaStep2);