import promisify from '../promisify'

export default (option?: WechatMiniprogram.NavigateBackOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.navigateBack)(option)
