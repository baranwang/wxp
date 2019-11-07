import promisify from '../promisify'

export default (option: WechatMiniprogram.SetTabBarItemOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setTabBarItem)(option)
