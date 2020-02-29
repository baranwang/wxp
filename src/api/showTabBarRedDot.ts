import promisify from '../promisify'

export const showTabBarRedDot = (option: WechatMiniprogram.ShowTabBarRedDotOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showTabBarRedDot)(option)
