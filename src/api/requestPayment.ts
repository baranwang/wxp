import promisify from '../promisify'

export default (option: WechatMiniprogram.RequestPaymentOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.requestPayment)(option)
