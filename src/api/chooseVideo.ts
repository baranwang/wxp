import promisify from '../promisify'

export const chooseVideo = (option: WechatMiniprogram.ChooseVideoOption):
  Promise<WechatMiniprogram.ChooseVideoSuccessCallbackResult> => promisify(wx.chooseVideo)(option)
