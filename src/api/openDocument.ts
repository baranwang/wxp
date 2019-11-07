import promisify from '../promisify'

export default (option: WechatMiniprogram.OpenDocumentOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.openDocument)(option)
