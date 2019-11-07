import promisify from '../promisify'

export default (option?: WechatMiniprogram.GetSelectedTextRangeOption):
  Promise<WechatMiniprogram.GetSelectedTextRangeSuccessCallbackResult> => promisify(wx.getSelectedTextRange)(option)
