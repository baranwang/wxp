import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.OpenSettingSuccessCallbackResult> => promisify(wx.openSetting)()
