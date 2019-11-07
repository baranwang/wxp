import promisify from '../promisify'

export default (option: WechatMiniprogram.ShowToastOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showToast)(option)
