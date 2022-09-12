import { View, Text } from 'react-native'
import React from 'react'
import Style from './SubDetailStyle'
import { Label } from '../../utils/StringUtil'
import WebViewComp from '../webview/WebViewComp'
import IcnRewordLight from '../../assets/svg/IcnRewordLight'
import { AppUtil } from '../../utils/AppUtil'
import moment from 'moment'

const SubDetail = (props) => {

    const { spotlightTitle, spotlightDate, spotlightPublishBy,
        spotlightDescription, spotlightKeywords } = props.data

    return (
        <View style={Style.detailView}>
            <View>
                <Text style={Style.label}>{spotlightTitle}</Text>
                {/* <View style={Style.icnView}>
                    <IcnRewordLight width={AppUtil.getHP(2)} height={AppUtil.getHP(2)} />
                    <Text style={Style.icnTitle}>{"Madarek Spotlight"}</Text>
                </View> */}
                <Text style={Style.dateAuthor}>{moment(spotlightDate).format("YYYY-MM-DD")}<Text style={Style.redLabel}>{` ${spotlightPublishBy}`}</Text></Text>
            </View>
            <View style={Style.description}>
                <View style={Style.contentBox}>
                    <Text style={Style.heading}>{Label.SpotlightDescription}</Text>
                    <View style={Style.line}></View>
                    <WebViewComp data={spotlightDescription} />
                </View>
                {/* <View style={Style.contentBox}>
                <Text style={Style.heading}>{Label?.ChallengesTheIdeaIsAddressing}</Text>
                <WebViewComp data={data?.challengesAddressing} />
            </View> */}
                {/* <View style={Style.contentBox}>
                <Text style={Style.heading}>{Label?.BenefitsOfIdeaImplementation}</Text>
                <WebViewComp data={data?.benefitIdea} />
            </View> */}
                <View style={Style.contentBox}>
                    <Text style={Style.heading}>{`${Label.SpotlightKeywords} (${Label.Meta})`}</Text>
                    <View style={Style.line}></View>
                    <WebViewComp data={spotlightKeywords} />
                </View>
            </View>

        </View>
    )
}

export default SubDetail