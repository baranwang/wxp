import promisify from '../promisify'

export default (option: WechatMiniprogram.SetInnerAudioOption):
  Promise<WechatMiniprogram.ChooseVideoSuccessCallbackResult> => promisify(wx.setInnerAudioOption)(option)
