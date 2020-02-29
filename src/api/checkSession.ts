import promisify from '../promisify'

export const checkSession = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.checkSession)()
