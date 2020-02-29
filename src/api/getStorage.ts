import promisify from '../promisify'

export const getStorage = (option: WechatMiniprogram.GetStorageOption):
  Promise<WechatMiniprogram.GetStorageSuccessCallbackResult> => promisify(wx.getStorage)(option)
