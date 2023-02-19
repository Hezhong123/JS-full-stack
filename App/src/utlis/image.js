//图像操作插件

import * as ImagePicker from 'expo-image-picker';

export  const Image_pick = async (url) => {
    let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
    });

    if (!result.canceled) {
        url(result.assets[0].uri)
    } else {
        alert('You did not select any image.')
    }
}


export const Image_camera = async (url) => {
    let result = await ImagePicker.launchCameraAsync({
        quality: 1,
    })

    if (!result.canceled) {
        url(result.assets[0].uri)
    } else {
        alert('You did not select any image.')
    }

}
