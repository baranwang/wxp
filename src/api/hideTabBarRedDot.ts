import promisify from '../promisify'

export default (option: WechatMiniprogram.HideTabBarRedDotOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideTabBarRedDot)(option)
