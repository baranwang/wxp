import promisify from '../promisify'

export const reLaunch = (option: WechatMiniprogram.ReLaunchOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.reLaunch)(option)
