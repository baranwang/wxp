import promisify from '../promisify'

export default (option: WechatMiniprogram.WxRemoveSavedFileOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.removeSavedFile)(option)
