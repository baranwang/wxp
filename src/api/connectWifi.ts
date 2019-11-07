import promisify from '../promisify'

export default (option: WechatMiniprogram.ConnectWifiOption):
  Promise<WechatMiniprogram.WifiError> => promisify(wx.connectWifi)(option)
