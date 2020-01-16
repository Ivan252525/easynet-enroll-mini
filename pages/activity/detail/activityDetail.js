const app = getApp()
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    activityId: null,
    data: {
      activityInfo: {
        banner: "",
        title: "",
        enrollNum: 0,
        viewNum: 0,
        activityState: 2,
        activityStateStr: "",
        activityTime: "",
        startTime: "",
        endTime: "",
        address: "",
        phone: "",
        isEnroll: 0,
        isCollect: 0,
        activityDetail: [
        ],
      },
      business: {
        id: null,
        logo: "",
        businessName: "",
        activityNum: 0,

      }
    }
  },

  bindTapBusiness: function () {
    wx.navigateTo({
      url: '../../business/business?id=' + this.data.data.business.id,
    })
  },

  bindTapCollect: function () {
    let _this = this;

    wx.showLoading({
      title: "",
    })

    wx.request({
      url: app.globalData.url + '/server/activity/activity/collectorremove/' + _this.data.activityId,
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

  bindTapEnroll: function () {
    if (this.data.data.activityInfo.isEnroll == 1) {
      wx.showModal({
        title: '你已经报过名啦～',
        content: '可在 "我的" -> "我的报名" 中查看自己的报名信息',
        showCancel: false
      })
      return
    }
    if (this.data.data.activityInfo.activityState == 1) {
      wx.showModal({
        title: '报名失败',
        content: '活动尚未开始报名',
        showCancel: false
      })
      return 
    }
    if (this.data.data.activityInfo.activityState == 3) {
      wx.showModal({
        title: '报名失败',
        content: '活动已经结束报名',
        showCancel: false
      })
      return
    }

    wx.navigateTo({
      url: '../enroll/enroll?activityId=' + this.data.activityId,
    })
  },

  bindPhoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.data.activityInfo.phone,
    })
  },

  getViewData() {
    let _this = this;

    wx.request({
      url: app.globalData.url + '/server/activity/activity/info/' + _this.data.activityId,
      method: "GET",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          console.log(res.data.data)
          _this.setData({
            data: res.data.data
          })
        } else {
          wx.showModal({
            title: '获取活动数据失败',
            content: '获取活动数据失败',
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
      activityId: options.activityId
    })
  },

  login: function () {
    let _this = this;

    // 检查是否存有session
    let sessionStr = wx.getStorageSync('session')
    if (sessionStr) {
      console.log("session存在，检查token是否过期")
      // 检查是否过期
      let session = JSON.parse(wx.getStorageSync('session'));
      let expireIn = session.expireIn;
      let timestamp = Date.parse(new Date())
      console.log("当前时间戳：", timestamp)
      console.log("token过期时间：", expireIn)
      if (timestamp >= expireIn) {
        console.log("token已过期，重新登陆")
        _this.wxLogin()
        return
      } else {
        _this.getViewData()
      }
    } else {
      // session不存在，调用微信登陆接口再向服务器登陆
      console.log("session不存在");
      _this.wxLogin()
    }
  },

  wxLogin: function () {
    console.log("调用微信登陆")
    wx.login({
      success(res) {
        if (res.code) {
          console.log("向服务器登陆，code：", res.code);
          wx.request({
            url: app.globalData.url + '/server/user/user/login/' + res.code,
            method: 'POST',
            success: function (res) {
              if (res.statusCode == 200 && res.data.code == 200) {
                console.log("服务器登陆成功，data：", res.data);
                let session = res.data.data
                wx.setStorageSync('session', JSON.stringify(session)) // 保存会话到缓存

                _this.getViewData()
              } else {
                console.log('服务器登录失败:', res.data.desc)
                return
              }
            }
          })
        } else {
          console.log('wx.login调用失败：' + res.errMsg)
          return
        }
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
    this.login();
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
    return {
      title: this.data.data.activityInfo.title,
      path: "/pages/activity/detail/activityDetail?activityId=" + this.data.activityId,
      imageUrl: this.data.data.activityInfo.banner
    }
  }
})