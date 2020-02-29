import promisify from '../promisify'

export const setWifiList = (option: WechatMiniprogram.SetWifiListOption):
  Promise<WechatMiniprogram.WifiError> => promisify(wx.setWifiList)(option)
