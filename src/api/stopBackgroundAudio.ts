import promisify from '../promisify'

export const stopBackgroundAudio = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.stopBackgroundAudio)
