import promisify from '../promisify'

export const setBackgroundColor = (option: WechatMiniprogram.SetBackgroundColorOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setBackgroundColor)(option)
