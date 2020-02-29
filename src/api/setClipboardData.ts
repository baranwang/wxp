import promisify from '../promisify'

export const setClipboardData = (option: WechatMiniprogram.SetClipboardDataOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setClipboardData)(option)
