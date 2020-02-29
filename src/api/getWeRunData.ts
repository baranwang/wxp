import promisify from '../promisify'

export const getWeRunData = (): Promise<WechatMiniprogram.GetWeRunDataSuccessCallbackResult> => promisify(wx.getWeRunData)()
