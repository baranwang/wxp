import promisify from '../promisify'

export const setEnableDebug = (option: WechatMiniprogram.SetEnableDebugOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setEnableDebug)(option)
