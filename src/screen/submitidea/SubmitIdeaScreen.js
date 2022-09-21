import React, { memo, useState } from "react";
import { View, Text, ScrollView, ScrollViewBase, StatusBar, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CommonHeader from "../../component/commonheader/CommonHeader";
import SubmitIdeaStep1 from "../../component/submitideas/SubmitIdeaStep1";
import SubmitIdeaStep2 from "../../component/submitideas/SubmitIdeaStep2";
import SubmitIdeaStep3 from "../../component/submitideas/SubmitIdeaStep3";
import { AppConfig } from "../../manager/AppConfig";
import { UserManager } from "../../manager/UserManager";
import { EndPoints } from "../../service/EndPoints";
import { Service } from "../../service/Service";
import { GetAppColor } from "../../utils/Colors";
import { deviceId, showMessageWithCallBack } from "../../utils/Constant";
import { Loger } from "../../utils/Loger";
import { Label } from "../../utils/StringUtil";
import Style from "./SubmitIdeaScreenStyle";

function SubmitIdeaScreen(props) {
  const [selectIndex, setSelectIndex] = useState(0);

  const [step1Obj, setStep1Obj] = useState(null);

  const onSubmit = (dataForm) => {

    var formData = new FormData()

    formData.append('device_id', deviceId)
    formData.append('lang', AppConfig.lang.toString())
    formData.append('token', AppConfig.token.toString())
    formData.append('frontuser_id', UserManager.userId.toString())
    formData.append('task', "save")

    formData.append('idea_id', 0)
    formData.append('idea_title', step1Obj.title)
    formData.append('sector_id', "2")
    formData.append('category_id', "5")
    formData.append('sub_category_id', "0")

    formData.append('form_data', dataForm.data_obj)

    formData.append('idea_cover_image', dataForm.isIdeaCoverImage)
    formData.append('idea_upload_files', dataForm.isFile)
    formData.append(getMultiImage(dataForm.isMultiImage))
    formData.append('idea_upload_videos', dataForm.isVideoFile)

    Service.postFormDataFetch(EndPoints.submitidea, formData, (res) => {
      showMessageWithCallBack(Label.IdeaSubmitSuccessfully, () => {
        // props.navigation.navigate("UserDashboardScreen");
        props.navigation.goBack()
      })
    }, (err) => {
      Loger.onLog("###", err);
    }
    );

  }
  const getMultiImage = (list) => {
    let data = new FormData();

    list.forEach(element => {
      if (element.uri) {
        data.append('additional_images', element)
        // let ext = element.uri.split('.');
        // data.append('additional_images', {
        //   uri: element.uri,
        //   name: element.name,
        //   type: 'image/' + (ext.length > 0 ? ext[1] : 'jpeg')
        // });
      }
    });

    return data;
  }

  const onSubmit1 = (dataForm) => {


    dataForm.device_id = deviceId,
      dataForm.lang = AppConfig.lang.toString(),
      dataForm.token = AppConfig.token.toString(),
      dataForm.frontuser_id = UserManager.userId.toString(),
      dataForm.task = "save",

      dataForm.idea_id = 0,
      dataForm.idea_title = step1Obj.title,
      dataForm.sector_id = step1Obj.sectorsId,
      dataForm.category_id = step1Obj.categoryId

    Service.post(EndPoints.submitidea, dataForm, (res) => {
      // props.navigation.navigate("UserDashboardScreen");
    }, (err) => {
      Loger.onLog("###", err);
    }
    );

  }


  return (
    <SafeAreaView style={Style.MainView}>
      <CommonHeader isType={"SubmitIdeaScreen"} />
      <ScrollView>
        <View style={Style.containerView}>
          <View style={Style.selectPageIndicatorsView}>
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 0 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
            <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 1 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} />
            {/* <View style={[Style.selectPageIndicators, { backgroundColor: selectIndex == 2 ? GetAppColor.statusBarYellow : GetAppColor.btnBorderColor }]} /> */}
          </View>

          {/* {selectIndex == 0 && <SubmitIdeaStep1 onNext={(obj) => {setStep1Obj(obj); onSubmit()} }/>} */}


          {selectIndex == 0 && <SubmitIdeaStep1 onNext={(obj) => { setStep1Obj(obj); setSelectIndex(selectIndex + 1); }} />}
          {selectIndex == 1 && <SubmitIdeaStep2 data={step1Obj} onNext={(dataForm) => { onSubmit(dataForm) }} />}



          {/* {selectIndex == 2 && <SubmitIdeaStep3 onNext={() => onSubmit()} step1Obj={step1Obj} step2Obj={step2Obj} />} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default memo(SubmitIdeaScreen);