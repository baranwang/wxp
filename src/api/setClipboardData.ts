import promisify from '../promisify'

export default (option: WechatMiniprogram.SetClipboardDataOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setClipboardData)(option)
