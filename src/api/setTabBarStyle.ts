import promisify from '../promisify'

export default (option?: WechatMiniprogram.SetTabBarStyleOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setTabBarStyle)(option)
