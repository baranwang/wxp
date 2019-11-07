import promisify from '../promisify'

export default (option: WechatMiniprogram.StartLocalServiceDiscoveryOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startLocalServiceDiscovery)(option)
