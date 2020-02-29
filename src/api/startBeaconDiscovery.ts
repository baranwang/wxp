import promisify from '../promisify'

export const startBeaconDiscovery = (option: WechatMiniprogram.StartBeaconDiscoveryOption):
  Promise<WechatMiniprogram.IBeaconError> => promisify(wx.startBeaconDiscovery)(option)
