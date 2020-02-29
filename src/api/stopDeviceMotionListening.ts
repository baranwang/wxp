import promisify from '../promisify'

export const stopDeviceMotionListening = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopDeviceMotionListening)()
