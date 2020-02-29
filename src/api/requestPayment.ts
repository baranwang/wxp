import promisify from '../promisify'

export const requestPayment = (option: WechatMiniprogram.RequestPaymentOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.requestPayment)(option)
