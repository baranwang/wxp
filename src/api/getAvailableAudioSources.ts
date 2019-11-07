import promisify from '../promisify'

export default ():
  Promise<WechatMiniprogram.GetAvailableAudioSourcesSuccessCallbackResult> => promisify(wx.getAvailableAudioSources)()
