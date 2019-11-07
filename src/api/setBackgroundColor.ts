import promisify from '../promisify'

export default (option: WechatMiniprogram.SetBackgroundColorOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setBackgroundColor)(option)
