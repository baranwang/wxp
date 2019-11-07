import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.ChooseAddressSuccessCallbackResult> => promisify(wx.chooseAddress)()
