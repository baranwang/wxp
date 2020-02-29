import promisify from '../promisify'

export const request = (option: WechatMiniprogram.RequestOption):
  Promise<WechatMiniprogram.RequestSuccessCallbackResult> => promisify(wx.request)(option)
