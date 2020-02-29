import promisify from '../promisify'

export const hideHomeButton = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideHomeButton)()
