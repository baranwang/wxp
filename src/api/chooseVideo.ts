import promisify from '../promisify'

export default (option: WechatMiniprogram.ChooseVideoOption):
  Promise<WechatMiniprogram.ChooseVideoSuccessCallbackResult> => promisify(wx.chooseVideo)(option)
