# Setup

## Start Server

Server started at http://localhost:1234 . Parcel is used for bundler.

```
yarn start
```

## Requirements

![mockup](./mockups/chat.png)

_需求列表：_

1. 用户输入聊天信息，点击"Send"按钮，可以在对话窗口显示用户输入内容
2. 若用户输入信息能够匹配系统预设好关键字，则系统自动回复，并在对话窗口显示系统自动回复内容
3. 若用户输入信息不能匹配，则无回复

_提示：_

1. 预设问题在 src/data/answers.json 文件中查看，关键字存储在"tags"中，例如`"tags": [ "发货时间" ]`
2. `"tags": [ "DEFAULT" ]`为系统默认回答
3. 系统有两个角色，`ROBOT`和`CUSTOMER`，分别指代系统和用户两个角色，在 src/constants.js 中存取
