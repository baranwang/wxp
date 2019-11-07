import promisify from '../promisify'

export default (option: WechatMiniprogram.ShowActionSheetOption):
  Promise<WechatMiniprogram.ShowActionSheetSuccessCallbackResult> => promisify(wx.showActionSheet)(option)
