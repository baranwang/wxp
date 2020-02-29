import promisify from '../promisify'

export const seekBackgroundAudio = (option: WechatMiniprogram.SeekBackgroundAudioOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.seekBackgroundAudio)(option)
