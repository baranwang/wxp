import promisify from '../promisify'

export const getNetworkType = (): Promise<WechatMiniprogram.GetNetworkTypeSuccessCallbackResult> => promisify(wx.getNetworkType)()
