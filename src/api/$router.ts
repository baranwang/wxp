import { navigateBack } from './navigateBack'
import { navigateTo } from './navigateTo'
import { redirectTo } from './redirectTo'
import { switchTab } from './switchTab'

const wxp = { navigateTo, redirectTo, switchTab, navigateBack }

const encode = (str: string) => encodeURIComponent(str).replace(/[!'()*]/g, (c: string) => `%${c.charCodeAt(0).toString(16)}`).replace(/%2C/g, ',')

const router = (
  type: 'switchTab' | 'redirectTo' | 'navigateTo',
  location: string,
  query: Record<string, string> = {},
): Promise<any> => {
  const querystring = Object.keys(query).map((key) => `${encode(key)}=${encode(query[key])}`).join('&')
  const url = querystring.length ? `${location}?${querystring}` : location
  return wxp[type]({ url }).catch(() => wx.redirectTo({ url }))
}

export const $router = {
  navigate: (location: string, query?: Record<string, string>): Promise<WechatMiniprogram.NavigateToSuccessCallbackResult> => router('navigateTo', location, query),
  redirect: (location: string, query?: Record<string, string>): Promise<WechatMiniprogram.GeneralCallbackResult> => router('redirectTo', location, query),
  switchTab: (location: string): Promise<WechatMiniprogram.GeneralCallbackResult> => router('switchTab', location),
  back: (option?: WechatMiniprogram.NavigateBackOption): Promise<WechatMiniprogram.GeneralCallbackResult> => wxp.navigateBack(option),
}
