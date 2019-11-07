import promisify from '../promisify'

export default (option: WechatMiniprogram.SendHCEMessageOption):
  Promise<WechatMiniprogram.NFCError> => promisify(wx.sendHCEMessage)(option)
