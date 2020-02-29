import promisify from '../promisify'

export const getSetting = (): Promise<WechatMiniprogram.GetSettingSuccessCallbackResult> => promisify(wx.getSetting)()
