import promisify from '../promisify'

export default (option: WechatMiniprogram.SetBackgroundTextStyleOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setBackgroundTextStyle)(option)
