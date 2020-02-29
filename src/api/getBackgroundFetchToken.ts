import promisify from '../promisify'

export const getBackgroundFetchToken = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.getBackgroundFetchToken)()
