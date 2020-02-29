import promisify from '../promisify'

export const startLocationUpdate = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startLocationUpdate)()
