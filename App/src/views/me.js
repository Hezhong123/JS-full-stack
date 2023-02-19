import {Button, Text, View} from "react-native";
import {_User, _UserDelete, _UserPOST, _UserPUT} from "../models/_user";

export function Me({}){
    return <View>
        <View>
            <Text> Api 请求范式 </Text>
            <Button title={'POST登陆'} onPress={async () => {
                let data = await _UserPOST()
                alert(data.code + data.msg)
            }}/>
            <Button title={'Get请求个人信息'} onPress={async () => {
                let data  = await _User()
                alert(data.code + data.msg)
            }}/>
            <Button title={'put修改用户信息'} onPress={async () => {
                let data = await _UserPUT()
                alert(data)
            }}/>
            <Button title={'Delete注销用户'} onPress={async () => {
                let data = await _UserDelete()
                alert(data)
            }}/>
        </View>
    </View>
}
