import promisify from '../promisify'

export const connectWifi = (option: WechatMiniprogram.ConnectWifiOption):
  Promise<WechatMiniprogram.WifiError> => promisify(wx.connectWifi)(option)
