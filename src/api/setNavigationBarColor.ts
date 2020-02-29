import promisify from '../promisify'

export const setNavigationBarColor = (option: WechatMiniprogram.SetNavigationBarColorOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setNavigationBarColor)(option)
