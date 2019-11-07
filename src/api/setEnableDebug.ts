import promisify from '../promisify'

export default (option: WechatMiniprogram.SetEnableDebugOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setEnableDebug)(option)
