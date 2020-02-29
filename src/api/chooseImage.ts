import promisify from '../promisify'

export const chooseImage = (option: WechatMiniprogram.ChooseImageOption):
  Promise<WechatMiniprogram.ChooseImageSuccessCallbackResult> => promisify(wx.chooseImage)(option)
