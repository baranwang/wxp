import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GetSettingSuccessCallbackResult> => promisify(wx.getSetting)()
