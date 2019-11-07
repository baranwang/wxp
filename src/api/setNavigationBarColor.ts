import promisify from '../promisify'

export default (option: WechatMiniprogram.SetNavigationBarColorOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setNavigationBarColor)(option)
