import promisify from '../promisify'

export const openLocation = (option: WechatMiniprogram.OpenLocationOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.openLocation)(option)
