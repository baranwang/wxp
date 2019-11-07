import promisify from '../promisify'

export default ():
  Promise<WechatMiniprogram.GetBackgroundAudioPlayerStateSuccessCallbackResult> =>
  promisify(wx.getBackgroundAudioPlayerState)()
