import promisify from '../promisify'

export const setTabBarStyle = (option?: WechatMiniprogram.SetTabBarStyleOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setTabBarStyle)(option)
