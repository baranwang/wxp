import promisify from '../promisify'

export const getWifiList = (option: WechatMiniprogram.GetWifiListOption):
  Promise<WechatMiniprogram.WifiError> => promisify(wx.getWifiList)(option)
