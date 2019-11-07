import promisify from '../promisify'

export default (option: WechatMiniprogram.ShowShareMenuOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showShareMenu)(option)
