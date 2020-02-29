import promisify from '../promisify'

export const stopLocationUpdate = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopLocationUpdate)()
