import promisify from '../promisify'

export default (option: WechatMiniprogram.DownloadFileOption):
  Promise<WechatMiniprogram.DownloadFileSuccessCallbackResult> => promisify(wx.downloadFile)(option)
