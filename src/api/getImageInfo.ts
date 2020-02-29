import promisify from '../promisify'

export const getImageInfo = (option: WechatMiniprogram.GetImageInfoOption):
  Promise<WechatMiniprogram.GetImageInfoSuccessCallbackResult> => promisify(wx.getImageInfo)(option)
