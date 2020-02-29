import promisify from '../promisify'

export const hideTabBar = (option: WechatMiniprogram.HideTabBarOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.hideTabBar)(option)
