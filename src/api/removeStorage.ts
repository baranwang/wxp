import promisify from '../promisify'

export const removeStorage = (option: WechatMiniprogram.RemoveStorageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.removeStorage)(option)
