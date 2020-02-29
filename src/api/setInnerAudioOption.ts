import promisify from '../promisify'

export const setInnerAudioOption = (option: WechatMiniprogram.SetInnerAudioOption):
  Promise<WechatMiniprogram.ChooseVideoSuccessCallbackResult> => promisify(wx.setInnerAudioOption)(option)
