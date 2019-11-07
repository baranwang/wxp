import promisify from '../promisify'

export default (option: WechatMiniprogram.AddCardOption):
  Promise<WechatMiniprogram.AddCardSuccessCallbackResult> => promisify(wx.addCard)(option)
