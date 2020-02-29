import promisify from '../promisify'

export const startPullDownRefresh = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startPullDownRefresh)()
