import {Button, Text, View} from "react-native";

export function Home({navigation}){
    return <View>
        <View>
            <Text> 图像类目 </Text>
            <Button title={'拍照'} onPress={()=>{}} />
            <Button title={'选择图片'} onPress={()=>{}} />
        </View>

        <View>
            <Text> 声音 </Text>
            <Button title={'录音'} onPress={()=>{}} />
            <Button title={'播放音乐'} onPress={()=>{}} />
        </View>

        <View>
            <Text> 其他服务 </Text>
            <Button title={'震动手机'} onPress={()=>{}} />
            <Button title={'推送通知'} onPress={()=>{}} />
        </View>
        <Button title={'我的'} onPress={()=>navigation.navigate('Me')} />
    </View>
}
