import promisify from '../promisify'

export const uploadFile = (option: WechatMiniprogram.UploadFileOption):
  Promise<WechatMiniprogram.UploadFileSuccessCallbackResult> => promisify(wx.uploadFile)(option)
