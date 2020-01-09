const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    data: {
      isLike : 0,
      likeNum: 0,
      businessName: "",
      logo: "",
      about: "",
      activityList: [
      ],
    }
  },

  bindActivityTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../activity/detail/activityDetail?activityId=' + activityId
    })
  },

  bindTapLike: function (e) {
    wx.showLoading({
      title: "",
    })
    let _this = this
    wx.request({
      url: app.globalData.url + '/server/business/business/likeorremove/' + _this.data.id,
      method: "POST",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          _this.getViewData()
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

  bindActivityTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../activity/detail/activityDetail?activityId=' + activityId
    })
  },

  getViewData() {
    let _this = this;

    wx.request({
      url: app.globalData.url + '/server/business/business/info/' + _this.data.id,
      method: "GET",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          _this.setData({
            data: res.data.data
          })
        } else {
          wx.showModal({
            title: '获取商家数据失败',
            content: '获取商家数据失败',
          })
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
    })
    this.getViewData();
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