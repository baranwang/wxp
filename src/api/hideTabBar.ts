import promisify from '../promisify'

export default (option: WechatMiniprogram.HideTabBarOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideTabBar)(option)
