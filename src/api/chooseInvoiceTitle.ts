import promisify from '../promisify'

export default (option: WechatMiniprogram.ChooseInvoiceTitleOption):
  Promise<WechatMiniprogram.ChooseInvoiceTitleSuccessCallbackResult> => promisify(wx.chooseInvoiceTitle)(option)
