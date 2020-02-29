import promisify from '../promisify'

export const chooseMessageFile = (option: WechatMiniprogram.ChooseMessageFileOption):
  Promise<WechatMiniprogram.ChooseMessageFileSuccessCallbackResult> => promisify(wx.chooseMessageFile)(option)
