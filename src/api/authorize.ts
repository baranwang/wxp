import promisify from '../promisify'

export default (option: WechatMiniprogram.AuthorizeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.authorize)(option)
