import promisify from '../promisify'

export const startDeviceMotionListening = (option: WechatMiniprogram.StartDeviceMotionListeningOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startDeviceMotionListening)(option)
