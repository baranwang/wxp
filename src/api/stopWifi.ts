import promisify from '../promisify'

export const stopWifi = ():
  Promise<WechatMiniprogram.WifiError> => promisify(wx.stopWifi)()
