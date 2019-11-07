import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.LoginSuccessCallbackResult> => promisify(wx.login)()
