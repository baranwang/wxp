import promisify from '../promisify'

export const setNavigationBarTitle = (option: WechatMiniprogram.SetNavigationBarTitleOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setNavigationBarTitle)(option)
