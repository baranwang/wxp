import promisify from '../promisify'

export const showRedPackage = (option: WechatMiniprogram.ShowRedPackageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showRedPackage)(option)
