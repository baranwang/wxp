import promisify from '../promisify'

export default (option: WechatMiniprogram.ShowLoadingOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showLoading)(option)
