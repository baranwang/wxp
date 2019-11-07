import promisify from '../promisify'

export default (option: WechatMiniprogram.UploadFileOption):
  Promise<WechatMiniprogram.UploadFileSuccessCallbackResult> => promisify(wx.uploadFile)(option)
