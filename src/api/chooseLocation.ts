import promisify from '../promisify'

export const chooseLocation = (option: WechatMiniprogram.ChooseLocationOption):
  Promise<WechatMiniprogram.ChooseLocationSuccessCallbackResult> => promisify(wx.chooseLocation)(option)
