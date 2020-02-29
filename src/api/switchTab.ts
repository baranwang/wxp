import promisify from '../promisify'

export const switchTab = (option: WechatMiniprogram.SwitchTabOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.switchTab)(option)
