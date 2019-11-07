import promisify from '../promisify'

export default (option: WechatMiniprogram.PlayVoiceOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.playVoice)(option)
