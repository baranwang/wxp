import promisify from '../promisify'

export const getSystemInfo = (): Promise<WechatMiniprogram.GetSystemInfoSuccessCallbackResult> => promisify(wx.getSystemInfo)()
