import React, { memo } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Loger } from "../../../utils/Loger";
import { Label } from "../../../utils/StringUtil";
import SubIdeasListWithImage from "../SubIdeasListWithImage";
import Style from "./TabPopularIdeasListStyle";
import { useNavigation } from '@react-navigation/native';


const TabPopularIdeas = (props) => {
   
    const navigation = useNavigation();
    return (
        <View style={Style.MainView}>
            <SubIdeasListWithImage data={props.data} btn={props.data.length > 0?Label.SeeAllIdeas:""} isType={props.isType}
                likeIdea={props.likeIdea}
                onButtonPress={() => { navigation.navigate("IdeasListScreen",{likeIdea : props.likeIdea})}}
                onItemPress={(item) => { navigation.navigate("IdeaDetails",item) }} 
                
                />
        </View>
    );
}
export default memo(TabPopularIdeas);





