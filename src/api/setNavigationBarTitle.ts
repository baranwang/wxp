import promisify from '../promisify'

export default (option: WechatMiniprogram.SetNavigationBarTitleOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setNavigationBarTitle)(option)
