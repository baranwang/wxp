import promisify from '../promisify'

export const getClipboardData = (option: WechatMiniprogram.GetClipboardDataOption):
  Promise<WechatMiniprogram.GetClipboardDataSuccessCallbackOption> => promisify(wx.getClipboardData)(option)
