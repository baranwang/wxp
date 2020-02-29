import promisify from '../promisify'

export const hideLoading = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideLoading)()
