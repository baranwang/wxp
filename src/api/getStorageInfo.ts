import promisify from '../promisify'

export const getStorageInfo = (): Promise<WechatMiniprogram.GetStorageInfoSuccessCallbackOption> => promisify(wx.getStorageInfo)()
