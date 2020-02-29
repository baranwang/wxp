import promisify from '../promisify'

export const stopBeaconDiscovery = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopBeaconDiscovery)()
