import promisify from '../promisify'

export const clearStorage = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.clearStorage)()
