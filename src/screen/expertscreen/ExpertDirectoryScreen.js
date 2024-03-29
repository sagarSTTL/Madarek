import { View, ScrollView, TouchableOpacity, Text } from 'react-native'
import React, { memo, useState, useEffect } from 'react'

import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import SimilarExperts from '../../component/expertscreen/SimilarExperts';
import Style from './ExpertDirectoryStyle';
import { UserManager } from '../../manager/UserManager';
import { AppConfig, getLanguage } from '../../manager/AppConfig';
import { EndPoints } from '../../service/EndPoints';
import ExpertDirectoryModel from '../../model/ExpertDirectoryModel';
import { Service } from '../../service/Service';
import { Label } from '../../utils/StringUtil';

function ExpertDirectoryScreen(props) {

    const [isCategories, setCategories] = useState([])
    const [isPageNo, setPageNo] = useState(1);

    useEffect(() => {
        onGetData(isPageNo);
    }, []);

    const onGetPaginations = () => {
        if (isCategories.length > (AppConfig.pageLimit - 1)) {
            onGetData(isPageNo + 1);
            setPageNo(isPageNo + 1);
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
            const expertListArr = isCategories;
            expertListArr.map((ele, index) => {
                if (ele.id == id) {
                    if (likeDislike == 1) {
                        expertListArr[index].isLike = likeDislike
                        expertListArr[index].like = Number(expertListArr[index].like) + 1;
                    }
                    else {
                        expertListArr[index].isLike = likeDislike
                        expertListArr[index].like = Number(expertListArr[index].like) - 1;
                    }
                }
            });
            setCategories([...expertListArr]);

        }, (err) => {
            Loger.onLog("err of likeUnlike", err)
        })
    }
    const onGetData = (pageNo) => {

        var cat = [];
        var data = {
            "frontuser_id": UserManager.userId,
            "language": getLanguage(),
            "categories_id": props?.route?.params?.id,
            "limit": AppConfig.pageLimit,
            "page": pageNo
        }

        Service.post(EndPoints.experts, data, (res) => {
            if (res.data == "")
                setPageNo(pageNo - 1)
            res.data.forEach(element => {
                let model = new ExpertDirectoryModel(element);
                cat.push(model)
            });

            if (pageNo == 1) setCategories(cat);
            else setCategories([...isCategories, ...cat]);



        }, (err) => {
        })

    }

    return (
        <SafeAreaView style={Style.SafeAryView}>
            <CommonHeader isType={"ExpertDirectoryScreen"} id={props?.route?.params?.id} onMenuClick={() => null} onFilter={() => setFilterVisible(!isFilterVisible)} />
            {isCategories.length > 0 ?
                <View style={Style.MainView}>
                    <SimilarExperts data={isCategories} isType={"ExpertDirectoryScreen"}
                        onLikeIdeas={(id) => onLikeIdeas(id)}
                        navigateDetail={(id) => props.navigation.navigate("ExpertDetailsScreen", { id: id })} onGetPaginations={onGetPaginations}
                        categoryName={props.route.params.categoryName}
                        navigateToComment={(item) => props.navigation.navigate("CommentScreen", { item: item })}
                    />
                </View>
                :
                <View style={Style.emptyView}>
                    <Text style={Style.txtNoDataFound}>{Label.NoDataFound}</Text>
                </View>
            }
        </SafeAreaView>
    )
}
export default memo(ExpertDirectoryScreen);