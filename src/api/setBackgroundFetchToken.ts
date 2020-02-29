import promisify from '../promisify'

export const setBackgroundFetchToken = (option: WechatMiniprogram.SetBackgroundFetchTokenOption):
  Promise<WechatMiniprogram.GetStorageSuccessCallbackResult> => promisify(wx.setBackgroundFetchToken)(option)
