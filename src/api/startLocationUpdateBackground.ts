import promisify from '../promisify'

export const startLocationUpdateBackground = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startLocationUpdateBackground)()
