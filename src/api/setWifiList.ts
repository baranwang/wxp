import promisify from '../promisify'

export default (option: WechatMiniprogram.SetWifiListOption):
  Promise<WechatMiniprogram.WifiError> => promisify(wx.setWifiList)(option)
