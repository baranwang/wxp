import promisify from '../promisify'

export const authorize = (option: WechatMiniprogram.AuthorizeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.authorize)(option)
