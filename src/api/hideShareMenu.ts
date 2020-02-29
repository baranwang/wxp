import promisify from '../promisify'

export const hideShareMenu = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideShareMenu)()
