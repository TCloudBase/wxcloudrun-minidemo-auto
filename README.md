# 微信云托管｜极简示例模版

[<img src="https://main.qcloudimg.com/raw/ffa781b63fdead4cac23470ad2eeb552.png" width="220px">](https://cloud.weixin.qq.com/cloudrun/onekey?template=minidemo)

## 项目介绍

此项目基于微信云托管能力范围编写，构建了一个简单的WEB后端服务，统计WEB网页的访问日志，并保存至serverless形态的mysql数据库中，然后在小程序中调用服务接口，获得访问次数。

项目包含微信云托管在单体运行中的基础能力使用，包含基础容器、mysql、微信小程序调用等。

项目技术栈：后端服务（nodejs + express）、WEB网页（原生js）、微信小程序（原生）

如果你已经体验过微信云托管基础能力，可以继续深入体验微信云托管在腾讯云其他产品的关联使用，日志监控等能力。

## 部署流程

- 一键部署方式：点击[此链接](https://cloud.weixin.qq.com/cloudrun/onekey?template=minidemo)跳转至控制台安装

- 手动部署方式：前往[源仓库](https://github.com/TCloudBase/wxcloudrun_minidemo)查看部署流程

- 注意：此仓库部分代码逻辑经过处理，请不要直接用此仓库代码自行操作部署，如果自行尝试请使用源仓库

## 项目总结

1. 本次部署实践后，你可以继续在此项目基础上进行修改，重新推送更新代码到仓库中，流水线会自动触发构建。

2. 在新版本发布前，可以进行充分测试，云托管提供各种测试白名单配置；测试验证后可以进行灰度发布，最终到100%新版本接单，完成新版本的全量更替；要是嫌麻烦，相信自己的本事，可以全量发布，给个痛快！

3. 后续在控制台中会支持自定义域名什么的，记得常来看看更新。

## 项目作者

- 李冠宇zira（腾讯技术产品经理，架构师，专家讲师）
- 如果想了解更多，欢迎关注公众号「腾讯云云开发」，回复“加群”或“云托管”，加入各种官方交流群
    
