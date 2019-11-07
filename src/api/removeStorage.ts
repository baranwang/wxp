import promisify from '../promisify'

export default (option: WechatMiniprogram.RemoveStorageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.removeStorage)(option)
