import promisify from '../promisify'

export default (option: WechatMiniprogram.ChooseInvoiceOption):
  Promise<WechatMiniprogram.ChooseInvoiceSuccessCallbackResult> => promisify(wx.chooseInvoice)(option)
