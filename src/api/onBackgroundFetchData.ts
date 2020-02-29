import promisify from '../promisify'

export const onBackgroundFetchData = (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.onBackgroundFetchData)()
