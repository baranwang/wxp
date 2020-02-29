import promisify from '../promisify'

export const saveFile = (option: WechatMiniprogram.WxSaveFileOption):
  Promise<WechatMiniprogram.WxSaveFileSuccessCallbackResult> => promisify(wx.saveFile)(option)
