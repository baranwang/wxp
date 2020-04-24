import promisify from '../promisify'

export const loadFontFace = (option: WechatMiniprogram.LoadFontFaceOption):
  Promise<WechatMiniprogram.LoadFontFaceCompleteCallbackResult> => promisify(wx.loadFontFace)(option)
