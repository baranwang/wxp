import promisify from '../promisify'

export const addCard = (option: WechatMiniprogram.AddCardOption):
  Promise<WechatMiniprogram.AddCardSuccessCallbackResult> => promisify(wx.addCard)(option)
