import promisify from '../promisify'

export const login = (): Promise<WechatMiniprogram.LoginSuccessCallbackResult> => promisify(wx.login)()
