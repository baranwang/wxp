import promisify from '../promisify'

export const showLoading = (option: WechatMiniprogram.ShowLoadingOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showLoading)(option)
