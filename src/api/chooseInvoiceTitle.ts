import promisify from '../promisify'

export const chooseInvoiceTitle = (option: WechatMiniprogram.ChooseInvoiceTitleOption):
  Promise<WechatMiniprogram.ChooseInvoiceTitleSuccessCallbackResult> => promisify(wx.chooseInvoiceTitle)(option)
