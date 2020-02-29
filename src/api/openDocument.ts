import promisify from '../promisify'

export const openDocument = (option: WechatMiniprogram.OpenDocumentOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.openDocument)(option)
