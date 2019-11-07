import promisify from '../promisify'

export default (option: WechatMiniprogram.OpenLocationOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.openLocation)(option)
