import promisify from '../promisify'

export const startLocalServiceDiscovery = (option: WechatMiniprogram.StartLocalServiceDiscoveryOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startLocalServiceDiscovery)(option)
