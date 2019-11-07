import promisify from '../promisify'

export default (option: WechatMiniprogram.ChooseImageOption):
  Promise<WechatMiniprogram.ChooseImageSuccessCallbackResult> => promisify(wx.chooseImage)(option)
