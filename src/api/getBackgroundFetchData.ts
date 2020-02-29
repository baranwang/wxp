import promisify from '../promisify'

export const getBackgroundFetchData = (option: WechatMiniprogram.GetBackgroundFetchDataOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.getBackgroundFetchData)(option)
