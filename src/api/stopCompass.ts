import promisify from '../promisify'

export const stopCompass = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopCompass)()
