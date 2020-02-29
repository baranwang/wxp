import promisify from '../promisify'

export const startCompass = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startCompass)()
