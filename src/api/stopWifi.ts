import promisify from '../promisify'

export default (): Promise<WechatMiniprogram.WifiError> => promisify(wx.stopWifi)()
