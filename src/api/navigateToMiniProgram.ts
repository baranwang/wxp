import promisify from '../promisify'

export const navigateToMiniProgram = (option: WechatMiniprogram.NavigateToMiniProgramOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.navigateToMiniProgram)(option)
