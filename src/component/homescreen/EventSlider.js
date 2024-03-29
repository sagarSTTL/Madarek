import React, { memo, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import FastImage from 'react-native-fast-image'

import styles, { sliderWidth, itemWidth } from "./EventSliderStyle";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GetAppColor } from "../../utils/Colors";
import { Label } from '../../utils/StringUtil'
import ImageLoad from "react-native-image-placeholder";
import { AppConfig } from "../../manager/AppConfig";

const EventSlider = ({ Entries }) => {

    const [isSelectIndecater, setSelectIndecater] = useState(1);


    const onEventSlider = () => {
        return (
            <View style={styles.sliderContainer}>
                <Carousel
                    data={Entries}
                    renderItem={onSliderRend}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={1}
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={false}
                    loopClonesPerSide={2}
                    autoplay={false}
                    autoplayDelay={1000}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => setSelectIndecater(index)}
                />
                <Pagination
                    dotsLength={Entries.length}
                    activeDotIndex={isSelectIndecater}
                    containerStyle={styles.paginationContainer}
                    dotColor={GetAppColor.borderRed}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor={GetAppColor.dotGreen}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }

    const onSliderRend = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.renderMainView}>
                <View style={styles.bgImage}>
                    <ImageLoad style={styles.bgImage} source={{ uri: item.url }} isShowActivity={false} />
                </View>
                <View style={styles.sliderRendTitleView}>
                    <Text numberOfLines={2} style={styles.txtsliderRendTitle}>{item.title}</Text>
                </View>

                {/* <TouchableOpacity style={styles.btnSliderRend}>
                    <Text style={styles.txtsliderRendBtnTitle}>{Label.SubnitIdea}</Text>
                </TouchableOpacity> */}

            </View>
        );
    }

    if (Entries.length > 0) {
        return (
            <View style={styles.MainView}>
                {onEventSlider()}
            </View>
        );
    }
    else
        return null
}
export default memo(EventSlider);





