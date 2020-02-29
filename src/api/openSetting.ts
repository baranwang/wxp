import promisify from '../promisify'

export const openSetting = (): Promise<WechatMiniprogram.OpenSettingSuccessCallbackResult> => promisify(wx.openSetting)()
