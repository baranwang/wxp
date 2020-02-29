import promisify from '../promisify'

export const playBackgroundAudio = (option: WechatMiniprogram.PlayBackgroundAudioOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.playBackgroundAudio)(option)
