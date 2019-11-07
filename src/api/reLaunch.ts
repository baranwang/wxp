import promisify from '../promisify'

export default (option: WechatMiniprogram.ReLaunchOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.reLaunch)(option)
