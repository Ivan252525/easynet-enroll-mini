const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkCode: null,
    data: {
      inputItems: [
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      checkCode: options.checkCode
    })

    wx.showLoading({
      title: '加载中',
    })

    let _this = this
    wx.request({
      url: app.globalData.url + '/server/enroll/enroll/check/' + this.data.checkCode,
      method: "POST",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          let data = res.data.data;
          _this.setData({
            data: data
          })
          wx.hideLoading()
        } else {
          wx.hideLoading()
          wx.showModal({
            title: '失败',
            content: res.data.desc,
            success(res) {
              wx.navigateBack({
                
              })
            }
          })
        }
      },
      complete() {
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})