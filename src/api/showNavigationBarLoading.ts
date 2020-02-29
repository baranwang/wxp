import promisify from '../promisify'

export const showNavigationBarLoading = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showNavigationBarLoading)()
