import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import React, { memo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import ExpertProfile from '../../component/expertscreen/ExpertProfile';
import ExpertInsights from '../../component/expertscreen/ExpertInsights';
import SimilarExperts from '../../component/expertscreen/SimilarExperts';

import Style from './ExpertDetailsStyle';
import { Label } from '../../utils/StringUtil';
import { GetAppColor } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';
import { EndPoints } from '../../service/EndPoints';
import { Service } from '../../service/Service';
import { Loger } from '../../utils/Loger';
import { AppConfig, getLanguage } from '../../manager/AppConfig';
import { UserManager } from '../../manager/UserManager';
import ExpertDetail from '../../model/ExpertDetail';
import { onShare } from '../../component/share/ShareContent';

function ExpertDetailsScreen(props) {
    const { themeColor } = useSelector((state) => state)
    const [expertData, setExpertData] = useState({})
    const [similarExpert, setSimilarExpert] = useState([])
    const [expertInsight, setExpertInsight] = useState([])

    // const expertData = props.route.params.data
    // const ExpertInsight = props.route.params.item

    const navigation = useNavigation()
    const id = props.route.params.id

    useEffect(() => {
        expertDetails(id);
    }, [])

    const joinExpert = (index) => {
        data = {
            frontuser_id: UserManager.userId,
            expert_id: index,
            language: getLanguage()
        }
        Service.post(EndPoints.joinExpert, data, (res) => {
            const expertArr = expertData
            if(expertArr.id == index){
                expertArr.joinRequest = res.data
            }
            setExpertData({...expertArr})
        },
            (err) => {
                Loger.onLog('err of joinExpert', err);
            })
    }

    const expertDetails = (id) => {
        let data = {
            "frontuser_id": UserManager.userId,
            "expert_id": id,
            "language": getLanguage()
        }
        Service.post(EndPoints.expertDetail, data, (res) => {
            const model = new ExpertDetail(res?.data?.expertSRows)
            setExpertData(model)
            if (!res.data?.expertSRows) {
                props.navigation.goBack()
            }

            const similarData = []
            res?.data?.similar_eperts.map((item) => {
                const similarExpert = new ExpertDetail(item)
                similarData.push(similarExpert);
            })
            setSimilarExpert(similarData)

            const expertInsightData = []
            res.data.experstinsightRows.map((item) => {
                const expertInsight = new ExpertDetail(item)
                expertInsightData.push(expertInsight);
            })
            setExpertInsight(expertInsightData)
        }),
            (error) => {
                Loger.onLog('error of expertDetail', error);
            }
    }
    const onLikeIdeas = (id) => {
        var data = {
            "field_name": "expert_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'ExpertsLikedislike'
        }
        Service.post(EndPoints.expertLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? 1 : 0;
            const expertArr = expertData;
            if (expertArr.id == id) {

                if (likeDislike == 1) {
                    expertArr.like = likeDislike
                    expertArr.totalLike = Number(expertArr.totalLike) + 1;
                }
                else {
                    expertArr.like = likeDislike
                    expertArr.totalLike = Number(expertArr.totalLike) - 1;
                }
            }
            setExpertData({ ...expertArr });

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }
    const onFavoriteIdeas = (id) => {
        var data = {
            "field_name": "expert_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": "FavoriteExperts"
        }
        Service.post(
            EndPoints.expertLikeUnlike,
            data,
            (res) => {
                const likeDislike = res?.data === 'dislike' ? true : false;
                const expertArr = expertData;
                if (expertData.id == id) {
                    expertArr.favorite = likeDislike;
                }
                setExpertData({ ...expertArr });
            },

            (err) => {
                Loger.onLog("err of challengeLikeUnlike", err);
            }
        );
    }
    const onLikeSimilarExpert = (id) => {
        var data = {
            "field_name": "expert_id",
            "id": id,
            "frontuser_id": UserManager.userId,
            "model": 'ExpertsLikedislike'
        }
        Service.post(EndPoints.expertLikeUnlike, data, (res) => {

            const likeDislike = res?.data === 'dislike' ? 1 : 0;
            const similarArr = similarExpert;

            similarArr && similarArr.map((ele, index) => {
                if (ele.id == id) {
                    if (likeDislike == 1) {
                        similarArr[index].isLike = likeDislike
                        similarArr[index].like = Number(similarArr[index].like) + 1;
                    } else {
                        similarArr[index].isLike = likeDislike
                        similarArr[index].like = Number(similarArr[index].like) - 1;
                    }
                }
            })
            setSimilarExpert([...similarArr]);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }
    const message = `experts-profile/${id}`
    return (
        <SafeAreaView style={Style.SafeAryView}>
            <CommonHeader isType={"ExpertDetailsScreen"} onMenuClick={() => null} onShare={() => onShare(message)} />
            <View style={Style.MainView}>

                <ScrollView>
                    <ExpertProfile data={expertData}
                        onFavoriteIdeas={(id) => onFavoriteIdeas(id)}
                        onLikeIdeas={(id) => onLikeIdeas(id)}
                        joinExpert={(id) => joinExpert(id)}
                        navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
                    />

                    {expertInsight && expertInsight.length > 0 &&
                        <ExpertInsights data={expertInsight} />}


                    {similarExpert && similarExpert.length > 0 &&
                        <View style={Style.similarExpertView}>
                            <SimilarExperts data={similarExpert} maxLimit={2} title={Label.SimilarExperts}
                                onLikeIdeas={(id) => onLikeSimilarExpert(id)}
                                navigateDetail={(id) => props.navigation.replace("ExpertDetailsScreen", { id: id })}
                                navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
                                onGetPaginations={() => null} />
                        </View>}

                    <View style={Style.footerView}>
                        <Text style={Style.txtTitle}>{Label.ExpertDes}</Text>
                        <View style={Style.btnView}>
                            {/* <TouchableOpacity style={[Style.btnLearMore, { borderColor: themeColor.buttonColor }]} onPress={() => navigation.navigate("BecomeAnExpert")}>
                                <Text style={[Style.txt, { color: themeColor.buttonColor }]}>{Label.LearnMore}</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity style={[Style.btnApplyNow, { backgroundColor: themeColor.buttonColor }]} onPress={() => props.navigation.navigate('SignupComman')}>
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
