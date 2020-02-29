import promisify from '../promisify'

export const stopVoice = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopVoice)()
