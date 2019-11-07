import promisify from '../promisify'

export default (option: WechatMiniprogram.StartBeaconDiscoveryOption):
  Promise<WechatMiniprogram.IBeaconError> => promisify(wx.startBeaconDiscovery)(option)
