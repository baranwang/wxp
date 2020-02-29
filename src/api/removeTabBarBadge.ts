import promisify from '../promisify'

export const removeTabBarBadge = (option: WechatMiniprogram.RemoveTabBarBadgeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.removeTabBarBadge)(option)
