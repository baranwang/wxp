import promisify from '../promisify'

export const getConnectedWifi = (option: WechatMiniprogram.GetConnectedWifiOption):
  Promise<WechatMiniprogram.GetConnectedWifiSuccessCallbackResult> => promisify(wx.getConnectedWifi)(option)
