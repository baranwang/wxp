import promisify from '../promisify'

export const getSelectedTextRange = (option?: WechatMiniprogram.GetSelectedTextRangeOption):
  Promise<WechatMiniprogram.GetSelectedTextRangeSuccessCallbackResult> => promisify(wx.getSelectedTextRange)(option)
