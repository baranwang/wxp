import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GetSystemInfoSuccessCallbackResult> => promisify(wx.getSystemInfo)()
