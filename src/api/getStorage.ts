import promisify from '../promisify'

export default (option: WechatMiniprogram.GetStorageOption):
  Promise<WechatMiniprogram.GetStorageSuccessCallbackResult> => promisify(wx.getStorage)(option)
