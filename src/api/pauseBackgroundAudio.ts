import promisify from '../promisify'

export const pauseBackgroundAudio = ():
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.pauseBackgroundAudio)()
