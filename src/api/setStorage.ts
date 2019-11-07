import promisify from '../promisify'

export default (option: WechatMiniprogram.SetStorageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.setStorage)(option)
