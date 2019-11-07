import promisify from '../promisify'

export default (option: WechatMiniprogram.GetClipboardDataOption):
  Promise<WechatMiniprogram.GetClipboardDataSuccessCallbackOption> => promisify(wx.getClipboardData)(option)
