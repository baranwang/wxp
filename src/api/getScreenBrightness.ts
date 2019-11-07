import promisify from '../promisify'

export default (option: WechatMiniprogram.GetScreenBrightnessOption):
  Promise<WechatMiniprogram.GetScreenBrightnessSuccessCallbackOption> => promisify(wx.getScreenBrightness)(option)
