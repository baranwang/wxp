import promisify from '../promisify'

export const scanCode = (option: WechatMiniprogram.ScanCodeOption):
  Promise<WechatMiniprogram.ScanCodeSuccessCallbackResult> => promisify(wx.scanCode)(option)
