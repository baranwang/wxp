import promisify from '../promisify'

export default (option: WechatMiniprogram.RequestSubscribeMessageOption):
  Promise<WechatMiniprogram.RequestSubscribeMessageSuccessCallbackResult> =>
  promisify(wx.requestSubscribeMessage)(option)
