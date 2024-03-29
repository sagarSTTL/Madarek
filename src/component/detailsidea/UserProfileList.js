import { Text, View, Image, FlatList, ScrollView, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { AppUtil } from '../../utils/AppUtil'
import { Label } from '../../utils/StringUtil'
import styles from './UserProfileListStyle'
import { useSelector } from 'react-redux'
import ParticipateModal from '../challengedetail/ParticipateModal'
import ImageLoad from "react-native-image-placeholder";

const UserProfileList = (props) => {
    const { themeColor } = useSelector((state) => state)
    const [modalVisible, setModalVisible] = useState(false);

    const renderItem = ({ item }) => (
        <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.profileDetails} onPress={() => props?.navigateToScreen ? props.navigateToScreen(item.id)  : null}>
                <View style={styles.imgStyle}>
                    <ImageLoad style={styles.img}
                    borderRadius={ AppUtil.getHP(9)}
                    resizeMode='cover' source={{ uri: item.user_photo }} isShowActivity={true} />
                </View>
                <Text style={styles.personName}>{item.first_name +" "+ item.last_name}</Text>
            </TouchableOpacity>
        </ScrollView>

    );
    const renderChallengeDetailItem = ({ item }) => (

        <ScrollView horizontal={true}>
            <View style={styles.profileDetails}>
                <Image
                    style={styles.imgChallengeListStyle}
                    horizontal
                    resizeMode='cover'
                    source={{ uri: item.panelPhoto }}
                />
               <Text style={styles.personName}>{item.firstName} {item.lastName}</Text>
                <Text style={styles.personOccupation}>{item.jobTitle}</Text>
            </View>
        </ScrollView>

    );

    return (
        <>
            {props.isType === 'ChallengeDetail' ?

                <View style={styles.profileChallenge}>

                    <View style={styles.profileSubChallenge}>
                        <Text style={[styles.heading, { paddingVertical: AppUtil.getHP(3) }]}>
                            {Label.EvaluationPanel}
                        </Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={props.profileData}
                            renderItem={renderChallengeDetailItem}
                            keyExtractor={item => item.id}
                        />
                    </View>

                    {/* <View style={styles.footerbtnView}>
                        <TouchableOpacity style={[styles.bottomBtn,
                        { backgroundColor: themeColor.buttonColor }]} onPress={() => { setModalVisible(true) }}>
                            <Text style={[styles.txtBottomBtn, { color: themeColor.buttonFontColor }]}>{Label.ParticipateNow}</Text>
                        </TouchableOpacity>
                    </View> */}

                </View>
                :
                <View style={styles.profileContainer}>
                    <Text style={[styles.heading, { paddingVertical: AppUtil.getHP(3) }]}>
                        {Label.Team}
                    </Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={props.profileData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>}
            <ParticipateModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        </>
    )
}

export default UserProfileList






