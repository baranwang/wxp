import promisify from '../promisify'

export const hideNavigationBarLoading = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideNavigationBarLoading)()
