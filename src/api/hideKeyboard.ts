import promisify from '../promisify'

export const hideKeyboard = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideKeyboard)()
