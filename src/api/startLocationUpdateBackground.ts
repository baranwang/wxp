import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.GeneralCallbackResult> => promisify(wx.startLocationUpdateBackground)()
