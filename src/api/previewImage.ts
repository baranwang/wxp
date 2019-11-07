import promisify from '../promisify'

export default (option: WechatMiniprogram.PreviewImageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.previewImage)(option)
