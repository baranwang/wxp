import promisify from '../promisify'

export default (option: WechatMiniprogram.StartAccelerometerOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startAccelerometer)(option)
