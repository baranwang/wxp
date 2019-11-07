import promisify from '../promisify'

export default (option: WechatMiniprogram.NavigateToMiniProgramOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.navigateToMiniProgram)(option)
