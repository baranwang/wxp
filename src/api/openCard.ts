import promisify from '../promisify'

export default (option: WechatMiniprogram.OpenCardOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.openCard)(option)
