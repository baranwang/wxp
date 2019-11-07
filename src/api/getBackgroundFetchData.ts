import promisify from '../promisify'

export default (option: WechatMiniprogram.GetBackgroundFetchDataOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.getBackgroundFetchData)(option)
