import promisify from '../promisify'

export default (option: WechatMiniprogram.NavigateToOption):
  Promise<WechatMiniprogram.NavigateToSuccessCallbackResult> => promisify(wx.navigateTo)(option)
