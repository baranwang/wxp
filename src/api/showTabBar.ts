import promisify from '../promisify'

export const showTabBar = (option: WechatMiniprogram.ShowTabBarOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showTabBar)(option)
