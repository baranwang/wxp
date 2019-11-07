import promisify from '../promisify'

export default (option: WechatMiniprogram.SetScreenBrightnessOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setScreenBrightness)(option)
