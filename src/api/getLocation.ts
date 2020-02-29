import promisify from '../promisify'

export const getLocation = (option: WechatMiniprogram.GetLocationOption):
  Promise<WechatMiniprogram.GetLocationSuccessCallbackResult> => promisify(wx.getLocation)(option)
