# JavaScript全栈开发脚手架

## 前言：
javaScript一直都很火热！各类框架一直更迭不停，从Jquery 到React、Node，Vue。脚步从未停止过的javaScrip已经为开发者开辟出一条康庄大道。 

现在，你只需要掌握这一门编程语言，就能成为全栈工程师，无论是云端还是Iot，网页或者app，javaScript都能独当一面。 

基于V8引擎开发的Node.js,高并发，低延时是它与生俱来的特性。假设你的业务不是CPU密集型，选择Node一定是最优的，至少主流的大公司都在这么做。

在网页端，App，甚至Iot，JavaScript都有不错的框架选择，比如React，Vue，微信小程序，Arduino这些都是业内成熟且可靠的解决方案。

甚至比编写AI服务也不再话下，由Google推出的TensorFlow机器学习框架同样支持javascript，无论是在Node服务端，还是网页，你都可以运行机器学习模型。

新人小白可以了解下我6W多字的知识库：[javaScript宝藏](https://www.yuque.com/u4015/ef4a0b)，里面整理编录了很多javaScript的优秀文章，涉及全栈的方法面面。

愿每位喜爱JavaScript的朋友，在编程的道路上少走弯路，大步向前，这也是整理并开源此项项目的初衷所在。



## 技术选型
* 移动端采用reactNative开发，一次编写生成android，ios两大平台原生App，
* 服务端采用node构建RESTful API服务，天生具备高并发，低延时的特性。
* Iot端 ...Arduino还在探索中

## 推荐新手的学习路线
* javaScrip 基础
* react 函数式编程
* reactNative 编写移动端App
* node 服务端RESTful API

## 案例项目
* [小船IM](https://www.boatim.top/) -- 一款双语即时通讯App

## 目录结构
### App使用MVVM架构
![App目录结构](https://boatim.top/img/App.png)
* assets用于存放资源文件例如（图片，声音，文件）
* scr是程序编写目录
  * components  组建
  * models App数据结构
  * utlis app工具包（声音，图片，支付，消息通知）
  * views app页面
***

### 服务端Api采用RESTful API设计思想
![Api目录结构](https://boatim.top/img/api.png)
* models 数据结构
* public 静态资源 （css，Apk，文件）
* routes 路由结构
* utlis 服务端工具包（）
  * auth 用户认证
  * sms 短信
  * email 邮件
  * oss 阿里云对象存储
* app.js 服务入口（资源挂载，路由配置，数据库链接，端口配置，日志统计）
***

### App内的一些基本功能
![app页面功能](https://boatim.top/img/apps.png)

### 

## 常用的示例代码
### APP路由入口
``` JavaScript
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Me" component={Me} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
```

### APP页面
``` JavaScript
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
```
*** 
### 服务端数据模型
``` JavaScript
const mongoose = require('mongoose')
const schema = mongoose.Schema;

const newSchema = new schema({
    id:{type:Number},
    tel:{type:Number,required: true},
    name:{type:String}
}, {timestamps: true})

const User = mongoose.model("User", newSchema, "user")

module.exports = User
```


### 服务端路由
``` JavaScript
const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = {
    code:200,
    msg:'用户信息，【请求成功】'
  }
})

router.post('/', function (ctx, next) {
  ctx.body = {
    code:200,
    token:'A123232d2232323',
    msg:'登陆成功'
  }
})

router.put('/', function (ctx, next) {
  ctx.status = 201
})

router.delete('/', function (ctx, next) {
  ctx.status = 204
})



module.exports = router
```










