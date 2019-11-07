import promisify from '../promisify'

export default (option: WechatMiniprogram.GetLocationOption):
  Promise<WechatMiniprogram.GetLocationSuccessCallbackResult> => promisify(wx.getLocation)(option)
