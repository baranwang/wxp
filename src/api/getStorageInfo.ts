import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GetStorageInfoSuccessCallbackOption> => promisify(wx.getStorageInfo)()
