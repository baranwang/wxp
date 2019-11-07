import promisify from '../promisify'

export default (option: WechatMiniprogram.SeekBackgroundAudioOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.seekBackgroundAudio)(option)
