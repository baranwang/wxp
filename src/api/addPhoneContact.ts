import promisify from '../promisify'

export default (option: WechatMiniprogram.AddPhoneContactOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.addPhoneContact)(option)
