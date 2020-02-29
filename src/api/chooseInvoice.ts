import promisify from '../promisify'

export const chooseInvoice = (option: WechatMiniprogram.ChooseInvoiceOption):
  Promise<WechatMiniprogram.ChooseInvoiceSuccessCallbackResult> => promisify(wx.chooseInvoice)(option)
