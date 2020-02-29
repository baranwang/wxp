import promisify from '../promisify'

export const getScreenBrightness = (option: WechatMiniprogram.GetScreenBrightnessOption):
  Promise<WechatMiniprogram.GetScreenBrightnessSuccessCallbackOption> => promisify(wx.getScreenBrightness)(option)
