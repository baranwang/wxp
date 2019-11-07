import promisify from '../promisify'

export default (option: WechatMiniprogram.ShowTabBarRedDotOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showTabBarRedDot)(option)
