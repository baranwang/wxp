import promisify from '../promisify'

export const removeSavedFile = (option: WechatMiniprogram.WxRemoveSavedFileOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.removeSavedFile)(option)
