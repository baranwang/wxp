import promisify from '../promisify'

export default (option: WechatMiniprogram.ShowTabBarOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showTabBar)(option)
