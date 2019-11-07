import promisify from '../promisify'

export default (option: WechatMiniprogram.RemoveTabBarBadgeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.removeTabBarBadge)(option)
