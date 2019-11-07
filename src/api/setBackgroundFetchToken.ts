import promisify from '../promisify'

export default (option: WechatMiniprogram.SetBackgroundFetchTokenOption):
  Promise<WechatMiniprogram.GetStorageSuccessCallbackResult> => promisify(wx.setBackgroundFetchToken)(option)
