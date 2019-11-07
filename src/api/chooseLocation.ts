import promisify from '../promisify'

export default (option: WechatMiniprogram.ChooseLocationOption):
  Promise<WechatMiniprogram.ChooseLocationSuccessCallbackResult> => promisify(wx.chooseLocation)(option)
