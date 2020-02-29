import promisify from '../promisify'

export const stopLocalServiceDiscovery = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopLocalServiceDiscovery)()
