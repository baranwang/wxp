import promisify from '../promisify'

export const chooseAddress = (): Promise<WechatMiniprogram.ChooseAddressSuccessCallbackResult> => promisify(wx.chooseAddress)()
