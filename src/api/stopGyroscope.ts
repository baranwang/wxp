import promisify from '../promisify'

export const stopGyroscope = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopGyroscope)()
