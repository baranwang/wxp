import promisify from '../promisify'

export default (option: WechatMiniprogram.UpdateShareMenuOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.updateShareMenu)(option)
