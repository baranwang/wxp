import promisify from '../promisify'

export default (option: WechatMiniprogram.PlayBackgroundAudioOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.playBackgroundAudio)(option)
