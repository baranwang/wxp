import promisify from '../promisify'

export const setScreenBrightness = (option: WechatMiniprogram.SetScreenBrightnessOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setScreenBrightness)(option)
