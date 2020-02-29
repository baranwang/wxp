import promisify from '../promisify'

export const setStorage = (option: WechatMiniprogram.SetStorageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setStorage)(option)
