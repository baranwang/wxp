import promisify from '../promisify'

export const navigateBackMiniProgram = (option: WechatMiniprogram.NavigateBackMiniProgramOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.navigateBackMiniProgram)(option)
