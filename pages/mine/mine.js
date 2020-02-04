// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    init: false,
    nickname: "",
    userLogo: "",
    data: {
      likeNum: 0,
      collectNum: 0
    }
  },

  tapLike: function () {
    wx.navigateTo({
      url: 'like/like',
    })
  },
  tapCollection: function () {
    wx.navigateTo({
      url: 'collection/collection',
    })
  },
  tapEnrollList: function () {
    wx.navigateTo({
      url: '../mine/enrollList/enrollList',
    })
  },
  tapUserInfo: function () {
    wx.navigateTo({
      url: 'userInfo/userInfo',
    })
  },

  bindGetUserInfo: function (e) {
    let _this = this

    if (e.detail.rawData) {
      wx.showLoading({
        title: '登录中',
      })

      let userData = JSON.parse(e.detail.rawData);
      console.log(userData)

      wx.request({
        url: app.globalData.url + '/server/user/user/init',
        method: "POST",
        header: {
          'token': JSON.parse(wx.getStorageSync('session')).token
        },
        data: {
          nickname: userData.nickName,
          userLogo: userData.avatarUrl,
          sex: userData.gender
        },
        success(res) {
          console.log(res)
          if (res.statusCode == 200 && res.data.code == 200) {
            let session = res.data.data
            wx.setStorageSync('session', JSON.stringify(session)) // 保存会话到缓存

            _this.setData({
              init: true,
              nickname: res.data.data.userInfo.nickname,
              userLogo: res.data.data.userInfo.userLogo
            })

            _this.getUserData()
          } else {
            console.log('初始化用户失败：' + res.errMsg)
            wx.showModal({
              title: '登陆失败',
              content: '登陆失败，请稍后再试',
            })
            return
          }
        },
        complete() {
          wx.hideLoading();
        }
      })
    }
  },

  getUserData() {
    let _this = this;
    wx.request({
      url: app.globalData.url + '/server/user/user/data',
      method: "GET",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        console.log(res)
        if (res.statusCode == 200 && res.data.code == 200) {
          _this.setData({
            data: res.data.data,
          })
        } else {
          wx.showModal({
            title: '请求失败',
            content: '请求用户数据失败',
          })
          return
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    let _this = this

    wx.getSetting({
      success(res) {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          let session = JSON.parse(wx.getStorageSync('session'));
          console.log(session)

          let init = session.init;
          let nickname = session.userInfo.nickname;
          let userLogo = session.userInfo.userLogo;

          _this.setData({
            init,
            nickname,
            userLogo
          })

          if (init) {
            _this.getUserData()
          }
        } else {
          _this.setData({
            init: false
          })
        }
      }
    })
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