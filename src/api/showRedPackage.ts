import promisify from '../promisify'

export default (option: WechatMiniprogram.ShowRedPackageOption):
  Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.showRedPackage)(option)
