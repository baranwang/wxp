export default (func: WechatMiniprogram.Wx[keyof WechatMiniprogram.Wx]): any => {
  if (typeof func !== 'function') return func
  return (option: any = {}, component?: any) => new Promise((success, fail) => {
    func({ ...option, success, fail }, component)
  })
}
