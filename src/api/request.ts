import promisify from '../promisify'

export default (option: WechatMiniprogram.RequestOption):
  Promise<WechatMiniprogram.RequestSuccessCallbackResult> => promisify(wx.request)(option)
