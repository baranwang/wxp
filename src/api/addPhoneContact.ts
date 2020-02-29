import promisify from '../promisify'

export const addPhoneContact = (option: WechatMiniprogram.AddPhoneContactOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.addPhoneContact)(option)
