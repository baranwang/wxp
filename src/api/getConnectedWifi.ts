import promisify from '../promisify'

export default (option: WechatMiniprogram.GetConnectedWifiOption):
  Promise<WechatMiniprogram.GetConnectedWifiSuccessCallbackResult> => promisify(wx.getConnectedWifi)(option)
