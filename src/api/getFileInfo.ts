import promisify from '../promisify'

export const getFileInfo = (option: WechatMiniprogram.WxGetFileInfoOption):
  Promise<WechatMiniprogram.WxGetFileInfoSuccessCallbackResult> => promisify(wx.getFileInfo)(option)
