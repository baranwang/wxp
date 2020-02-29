import promisify from '../promisify'

export const getBackgroundAudioPlayerState = (): Promise<WechatMiniprogram.GetBackgroundAudioPlayerStateSuccessCallbackResult> =>
  promisify(wx.getBackgroundAudioPlayerState)()
