import promisify from '../promisify'

export const startRecord = ():
  Promise<WechatMiniprogram.StartRecordSuccessCallbackResult> => promisify(wx.startRecord)()
