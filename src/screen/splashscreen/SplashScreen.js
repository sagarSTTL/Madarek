import React, { useState, memo } from "react";
import { View, Text, ImageBackground, StatusBar } from "react-native";
import SplaceImage from "../../assets/svg/splaceIcons/SplaceImage";
import MadarecSplace from "../../assets/svg/splaceIcons/MadarecSplace";
import STYLES from "./SplashStyle";
import { GetAppColor } from "../../utils/Colors";
import { Label } from "../../utils/StringUtil";

const SplashScreen = () => {
    // const image = {require('src/assets/svg/splaceIcons/MaskGroup.png')}
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={GetAppColor.barGrey} />
            <ImageBackground source={require('../../assets/svg/splaceIcons/MaskGroup.png')} style={STYLES.backgroundImage}>
                <View style={STYLES.splaceArea}>
                    <View style={STYLES.splaceLight}>
                        <MadarecSplace width={150} height={150} />
                    </View>
                    <View style={STYLES.logoDetails}>
                        <Text style={STYLES.logoText}>{Label.LogoTitle}</Text>
                    </View>
                    <View style={STYLES.innovationDetails}>
                        {/* <InnovationDetails width={550} height={60} /> */}
                        <Text style={STYLES.innovationDetailsText}>{Label.InnovationDetail}</Text>
                    </View>
                    <View style={STYLES.splaceLight}>
                        <SplaceImage width={300} height={360} />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );

}

export default memo(SplashScreen);


