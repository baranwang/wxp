import promisify from '../promisify'

export const playVoice = (option: WechatMiniprogram.PlayVoiceOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.playVoice)(option)
