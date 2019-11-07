import promisify from '../promisify'

export default (option: WechatMiniprogram.RedirectToOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.redirectTo)(option)
