import promisify from '../promisify'

export default (option: WechatMiniprogram.MakePhoneCallOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.makePhoneCall)(option)
