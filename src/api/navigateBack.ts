import promisify from '../promisify'

export const navigateBack = (option?: WechatMiniprogram.NavigateBackOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.navigateBack)(option)
