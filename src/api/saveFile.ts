import promisify from '../promisify'

export default (option: WechatMiniprogram.WxSaveFileOption):
  Promise<WechatMiniprogram.WxSaveFileSuccessCallbackResult> => promisify(wx.saveFile)(option)
