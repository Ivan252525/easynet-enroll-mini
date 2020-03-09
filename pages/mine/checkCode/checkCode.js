const app = getApp()
var qrcode = require('../../../weapp.qrcode.min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      businessLogo: "http://img4.imgtn.bdimg.com/it/u=2974438632,2797102034&fm=26&gp=0.jpg",
      activityTitle: "活动名活动名活动名活动名活动名活动名",
      checkCode: "1234567899",
      checkCodePart1: "123",
      checkCodePart2: "456",
      checkCodePart3: "7899",
      checkState: 1,
      checkTime: '2020-01-02 12:33'
    }
  },

  getViewData() {
    let _this = this;

    wx.showLoading({
      title: "",
    })

    wx.request({
      url: app.globalData.url + '/server/enroll/enroll/checkcode/' + _this.data.enrollId,
      method: "GET",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          let data = res.data.data;
          _this.setData({
            data: data
          })
          qrcode({
            width: 170,
            height: 170,
            canvasId: "checkCodeQr",
            text: _this.data.data.checkCode,
            callback: function () {

            }
          })
        } else {
          wx.showModal({
            title: '失败',
            content: '请稍后再试',
          })
        }
      },
      complete() {
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      enrollId: options.id,
    })
    this.getViewData()
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