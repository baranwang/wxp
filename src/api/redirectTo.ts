import promisify from '../promisify'

export const redirectTo = (option: WechatMiniprogram.RedirectToOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.redirectTo)(option)
