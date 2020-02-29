import promisify from '../promisify'

export const stopRecord = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopRecord)()
