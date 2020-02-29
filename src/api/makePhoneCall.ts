import promisify from '../promisify'

export const makePhoneCall = (option: WechatMiniprogram.MakePhoneCallOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.makePhoneCall)(option)
