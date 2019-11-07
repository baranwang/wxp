import promisify from '../promisify'

export default (option: WechatMiniprogram.LoadFontFaceOption):
  Promise<WechatMiniprogram.LoadFontFaceSuccessCallbackResult> => promisify(wx.loadFontFace)(option)
