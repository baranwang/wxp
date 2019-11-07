import promisify from '../promisify'

export default (option: WechatMiniprogram.SwitchTabOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.switchTab)(option)
