import promisify from '../promisify'

export default (option: WechatMiniprogram.GetWifiListOption):
  Promise<WechatMiniprogram.WifiError> => promisify(wx.getWifiList)(option)
