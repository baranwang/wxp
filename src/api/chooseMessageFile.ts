import promisify from '../promisify'

export default (option: WechatMiniprogram.ChooseMessageFileOption):
  Promise<WechatMiniprogram.ChooseMessageFileSuccessCallbackResult> => promisify(wx.chooseMessageFile)(option)
