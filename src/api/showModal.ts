export const showModal = (option: WechatMiniprogram.ShowModalOption):
  Promise<WechatMiniprogram.ShowModalSuccessCallbackResult> => new Promise(
    (resolve, reject) => wx.showModal({
      ...option,
      success: (res) => res.confirm ? resolve(res) : reject(res),
    }),
  )
