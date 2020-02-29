import promisify from '../promisify'

export const startAccelerometer = (option: WechatMiniprogram.StartAccelerometerOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startAccelerometer)(option)
