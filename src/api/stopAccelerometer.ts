import promisify from '../promisify'

export const stopAccelerometer = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopAccelerometer)()
