const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    enrollId: null,
    data: {
      "activityId": 1,
      "businessLogo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578460845297&di=c0fd9fe30b871e51c7024ced05c6827c&imgtype=0&src=http%3A%2F%2Fwww.ywwangbang.com%2FUploads%2Fimage%2F20180507%2F1525669937877841.jpg",
      "inputItems": [
        {
          "label": "姓名",
          "value": "five"
        },
        {
          "label": "性别",
          "value": "男"
        }
      ],
      "userEnrollId": 1
    }
  },

  bindTapActivityDetail: function () {
    wx.navigateTo({
      url: '../../activity/detail/activityDetail?activityId=' + this.data.data.activityId,
    })
  },

  bindTapCancel: function () {
    let enrollId = this.data.enrollId;

    let _this = this;

    wx.showModal({
      title: '提示',
      content: '你确定要取消报名吗？',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: "",
          })

          wx.request({
            url: app.globalData.url + '/server/enroll/enroll/cancel',
            method: "POST",
            header: {
              'token': JSON.parse(wx.getStorageSync('session')).token
            },
            data: {
              "enrollId": enrollId,
              "reason": "无"
            },
            success(res) {
              if (res.statusCode == 200 && res.data.code == 200) {
                wx.showToast({
                  title: '取消成功',
                  success: function () {
                      wx.navigateBack({
                        
                      })
                  }
                })
              } else {
                wx.showModal({
                  title: '取消失败',
                  content: '请稍后再试',
                })
              }
            },
            complete() {
              wx.hideLoading()
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  getViewData() {
    let _this = this;

    wx.showLoading({
      title: "",
    })

    wx.request({
      url: app.globalData.url + '/server/enroll/enroll/info/' + _this.data.enrollId,
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