import promisify from '../promisify'

export default (option: WechatMiniprogram.ScanCodeOption):
  Promise<WechatMiniprogram.ScanCodeSuccessCallbackResult> => promisify(wx.scanCode)(option)
