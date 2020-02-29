import promisify from '../promisify'

export const previewImage = (option: WechatMiniprogram.PreviewImageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.previewImage)(option)
