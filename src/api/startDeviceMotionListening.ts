import promisify from '../promisify'

export default (option: WechatMiniprogram.StartDeviceMotionListeningOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startDeviceMotionListening)(option)
