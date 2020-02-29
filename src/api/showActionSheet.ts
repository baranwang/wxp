import promisify from '../promisify'

export const showActionSheet = (option: WechatMiniprogram.ShowActionSheetOption):
  Promise<WechatMiniprogram.ShowActionSheetSuccessCallbackResult> => promisify(wx.showActionSheet)(option)
