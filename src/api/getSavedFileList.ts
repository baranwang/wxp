import promisify from '../promisify'

export const getSavedFileList = ():
  Promise<WechatMiniprogram.WxGetSavedFileListSuccessCallbackResult> => promisify(wx.getSavedFileList)()
