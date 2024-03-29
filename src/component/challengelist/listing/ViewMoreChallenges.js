import React, { memo } from "react";
import { View } from 'react-native'
import ChallengeListImage from "../ChallengeListImage";
import Style from "./ViewMoreChallengeStyle";

const ViewMoreChallenges =(props) =>{
  
    return (
        <View style={Style.MainView}>
            <ChallengeListImage
                data={props?.propName?.data}
                isType={"Challenges"} 
                scrollEnabled={true}
                navigateDetail={(id) => props.navigateDetail(id)}
                likeChallenge={(id) => props.likeChallenge(id)}
                favoriteChallenge={(id) => props.favoriteChallenge(id)}
                paginations={props?.paginations}
                navigateToComment={(item) => props.navigateToComment(item)}
                />
        </View>
    )
}
export default memo(ViewMoreChallenges);
