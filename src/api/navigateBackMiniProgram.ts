import promisify from '../promisify'

export default (option: WechatMiniprogram.NavigateBackMiniProgramOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.navigateBackMiniProgram)(option)
