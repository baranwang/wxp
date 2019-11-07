import promisify from '../promisify'

export default (option: WechatMiniprogram.CompressImageOption):
  Promise<WechatMiniprogram.CompressImageSuccessCallbackResult> => promisify(wx.compressImage)(option)
