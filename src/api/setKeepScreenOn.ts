import promisify from '../promisify'

export const setKeepScreenOn = (option: WechatMiniprogram.SetKeepScreenOnOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setKeepScreenOn)(option)
