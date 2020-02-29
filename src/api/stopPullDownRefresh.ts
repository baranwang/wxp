import promisify from '../promisify'

export const stopPullDownRefresh = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopPullDownRefresh)()
