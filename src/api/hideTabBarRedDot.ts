import promisify from '../promisify'

export const hideTabBarRedDot = (option: WechatMiniprogram.HideTabBarRedDotOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideTabBarRedDot)(option)
