import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState, memo } from 'react'
import * as ImagePicker from 'react-native-image-picker';
import IcnRemoveRound from '../../assets/svg/IcnRemoveRound'
import Style from './IdeaStepStyle'
import DocumentPicker, { types } from 'react-native-document-picker'
import { useEffect } from 'react';


function ImageList(props) {

    let list = props?.currentList;
    const [imageList, setImageList] = useState(list ? props?.currentList : [{ assets: "selected" }]);

    const onImagePress = (item) => {
        if (item === "add") {
            let options = {
                title: 'Select Image',
                customButtons: [
                    { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
                ],
                storageOptions: {
                    skipBackup: true,
                    path: 'images',
                },
            };

            ImagePicker.launchImageLibrary(options, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    let arr = [...imageList, response]
                    setImageList(arr);
                    // props.onUpdateList(arr);
                }
            });


        }
    }

    useEffect(()=>{
        props.onMultiImageArr(imageList);
    },[imageList])
    const addMaterial = async (item) => {
        if (item === "add") {
            const images = [...imageList]
            try {
                await DocumentPicker.pickMultiple({
                    type: [types.images]
                }).then((results) => {
                    results.map((res) => {
                        images.push({"assets":[res]})
                    })
                    setImageList(images)
                });

            } catch (err) {
                if (DocumentPicker.isCancel(err)) {
                } else {
                    throw err;
                }
            }
        }
    }
    const onRemoveImage = (index) => {
        let imgList = imageList;
        imgList.splice(index, 1);
        setImageList([...imgList]);
    }
    return (

        <View style={Style.innerSecondView1}>
            <Text style={Style.txtTitle}>{props.title}{props.requered == "Y" && <Text style={Style.txtStar}>*</Text>}</Text>
            <View style={Style.imageContainer}>
                {
                    imageList.map((item, index) => {
                        if (item?.assets === "selected") {
                            return (
                                <TouchableOpacity key={index} onPress={() => addMaterial("add")} style={Style.addImageView}>
                                    <Text style={Style.txtPlus}>{"+"}</Text>
                                    <Text style={Style.txtTitle}>{"Add More"}</Text>
                                </TouchableOpacity>
                            )
                        }
                        else {
                            return (
                                <View style={Style.addImageView}>
                                    <Image resizeMode="cover" resizeMethod="scale" style={Style.imgStyle} source={{ uri: item?.assets[0].uri }} />
                                    <TouchableOpacity style={Style.removeIcnStyle} onPress={() => onRemoveImage(index)}>
                                        <IcnRemoveRound width={15} height={15} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    })
                }
            </View>
        </View>
    )
}

export default memo(ImageList);