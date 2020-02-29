import promisify from '../promisify'

export const showToast = (option: WechatMiniprogram.ShowToastOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showToast)(option)
