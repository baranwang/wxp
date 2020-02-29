import promisify from '../promisify'

export const loadFontFace = (option: WechatMiniprogram.LoadFontFaceOption):
  Promise<WechatMiniprogram.LoadFontFaceSuccessCallbackResult> => promisify(wx.loadFontFace)(option)
