import promisify from '../promisify'

export const hideToast = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideToast)()
