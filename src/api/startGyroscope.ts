import promisify from '../promisify'

export default (option: WechatMiniprogram.StartGyroscopeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startGyroscope)(option)
