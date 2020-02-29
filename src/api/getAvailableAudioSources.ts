import promisify from '../promisify'

export const getAvailableAudioSources = ():
  Promise<WechatMiniprogram.GetAvailableAudioSourcesSuccessCallbackResult> => promisify(wx.getAvailableAudioSources)()
