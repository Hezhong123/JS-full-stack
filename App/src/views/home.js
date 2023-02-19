import {Button, Image, Text, View} from "react-native";
import {Image_pick, Image_camera} from "../utlis/image";
import {useState} from "react";
import {Av_Recording, Av_sound} from "../utlis/av";

export function Home({navigation}) {
    const [url, setUrl] = useState(null)
    return <View>
        <View>
            <Text> 图像类目 </Text>
            {url && <Image source={{uri: url}} style={{width: 200, height: 200}}/>}
            <Button title={'选择图片'} onPress={async () => {
                await Image_pick(url => {
                    setUrl(url)
                })
            }}/>
            <Button title={'拍照'} onPress={async () => await Image_camera(url => {
                console.log('拍照', url)
                setUrl(url)
            })}/>

            <Text> 声音 </Text>
            <Av_sound  url={''} />
            <Av_Recording />
        </View>

        <View>
            <Text> 其他功能 </Text>
            <Button title={'震动手机 【未】'} onPress={() => {
            }}/>
            <Button title={'推送通知【未】'} onPress={() => {

            }}/>
            <Button title={'蓝牙【未】'} onPress={() => {
            }}/>
            <Button title={'本地存储【未】'} onPress={() => {
            }}/>
        </View>


        <Button title={'我的【路由】'} onPress={() => navigation.navigate('Me')}/>
    </View>
}
