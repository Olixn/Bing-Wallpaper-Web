## ※已知分辨率（w*h）
```js
'1920x1200',
'1920x1080',
'1366x768',
'1280x768',
'1024x768',
'800x600',
'800x480',
'768x1280',
'720x1280',
'640x480',
'480x800',
'400x240',
'320x240',
'240x320'
```
## 获取今日壁纸
```text
获取今日壁纸(通过指定参数`t`,可以直接返回图片，也可以返回json数据，不指定t直接返回jpg图片)
```
#### 接口请求方式及URL
> **GET** /api/v1/today
#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
w | 1920 | Int | 是 | 壁纸宽度(请参考已知分辨率)
h | 1080 | Int | 是 | 壁纸高度(请参考已知分辨率)
t | json | String | 否 | jpg返回壁纸(默认)，json返回JSON数据
#### 请求示例
> https://127.0.0.1/api/v1/today?w=1920&h=1080&t=json
#### 成功返回结果
```json
{
	"copyright": "漫天飞舞的黑脉金斑蝶，墨西哥 (© Sylvain Cordier/Minden Pictures)",
	"date": "20220205",
	"msg": "success",
	"status": 1,
	"url": "https://cn.bing.com//th?id=OHR.MexicoMonarchs_ZH-CN7526758236_1920x1080.jpg"
}
```