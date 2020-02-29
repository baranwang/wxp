import promisify from '../promisify'

export const navigateTo = (option: WechatMiniprogram.NavigateToOption):
  Promise<WechatMiniprogram.NavigateToSuccessCallbackResult> => promisify(wx.navigateTo)(option)
