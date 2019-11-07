import promisify from '../promisify'

export default (option: WechatMiniprogram.SetKeepScreenOnOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setKeepScreenOn)(option)
