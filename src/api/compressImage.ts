import promisify from '../promisify'

export const compressImage = (option: WechatMiniprogram.CompressImageOption):
  Promise<WechatMiniprogram.CompressImageSuccessCallbackResult> => promisify(wx.compressImage)(option)
