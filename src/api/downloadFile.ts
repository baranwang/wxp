import promisify from '../promisify'

export const downloadFile = (option: WechatMiniprogram.DownloadFileOption):
  Promise<WechatMiniprogram.DownloadFileSuccessCallbackResult> => promisify(wx.downloadFile)(option)
