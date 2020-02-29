import promisify from '../promisify'

export const startGyroscope = (option: WechatMiniprogram.StartGyroscopeOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startGyroscope)(option)
