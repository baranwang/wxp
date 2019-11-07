import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.WxGetSavedFileListSuccessCallbackResult> =>
  promisify(wx.getSavedFileList)()
