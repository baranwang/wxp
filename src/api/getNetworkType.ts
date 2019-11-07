import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GetNetworkTypeSuccessCallbackResult> => promisify(wx.getNetworkType)()
