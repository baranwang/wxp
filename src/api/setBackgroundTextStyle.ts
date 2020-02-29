import promisify from '../promisify'

export const setBackgroundTextStyle = (option: WechatMiniprogram.SetBackgroundTextStyleOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setBackgroundTextStyle)(option)
