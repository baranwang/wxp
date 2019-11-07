import promisify from '../promisify'

export default (option: WechatMiniprogram.SetTabBarBadgeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setTabBarBadge)(option)
