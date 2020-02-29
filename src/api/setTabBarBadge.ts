import promisify from '../promisify'

export const setTabBarBadge = (option: WechatMiniprogram.SetTabBarBadgeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setTabBarBadge)(option)
