import promisify from '../promisify'

export default (option: WechatMiniprogram.WxGetFileInfoOption):
  Promise<WechatMiniprogram.WxGetFileInfoSuccessCallbackResult> => promisify(wx.getFileInfo)(option)
