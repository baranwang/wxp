import promisify from '../promisify'

export const setTabBarItem = (option: WechatMiniprogram.SetTabBarItemOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setTabBarItem)(option)
