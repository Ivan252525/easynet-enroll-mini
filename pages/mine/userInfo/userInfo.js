const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: "",
    userLogo: "",
    createTime: "",
    userCode: "",
    savaButtonColor: '#9FE0C8'
  },

  bindTapLogo: function () {
    wx.showToast({
      title: '暂不支持修改头像',
      icon: 'none'
    })
  },

  /**
   * 显示修改昵称弹窗
   */
  showEditNickname: function () {
    this.setData({
      tempNickname: this.data.nickname,
      showEditNicknamePop: true,
      focus: true,
    })
  },
  /**
   * 隐藏修改昵称弹窗
   */
  hideEditNickname: function () {
    this.setData({
      showEditNicknamePop: false,
      focus: false,
    })
  },
  /**
   * 绑定输入昵称
   */
  bindInputNickname: function (e) {
    this.setData({
      tempNickname: e.detail.value
    })
    if (this.data.tempNickname != null && this.data.tempNickname.trim() != '' && this.data.tempNickname != this.data.nickname) {
      console.log(111)
      this.setData({
        savaButtonColor: '#55C58B'
      })
    } else {
      console.log(222)
      this.setData({
        savaButtonColor: '#9FE0C8'
      })
    }
  },
  bindSaveEditNickname() {
    if (this.data.savaButtonColor == '#55C58B') {
      this.saveUserInfoApi(this.data.tempNickname, null)
    }
  },

  syncUserInfo() {
    let _this = this
    wx.getUserInfo({
      success(res) {
        let nickname = res.userInfo.nickName;
        let userLogo = res.userInfo.avatarUrl;
        _this.saveUserInfoApi(nickname, userLogo)
      }
    })
  },

  saveUserInfoApi(nickname, userLogo) {
    wx.showLoading({
      title: '',
    })
    let _this = this;
    wx.request({
      url: app.globalData.url + '/server/user/user/update',
      method: "POST",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      data: {
        "nickname": nickname,
        "userLogo": userLogo
      },
      success(res) {
        console.log(res)
        if (res.statusCode == 200 && res.data.code == 200) {
          let session = res.data.data
          wx.setStorageSync('session', JSON.stringify(session)) // 保存会话到缓存

          if (nickname) {
            _this.setData({
              nickname: nickname,
            })
          }
          if (userLogo) {
            _this.setData({
              userLogo: userLogo,
            })
          }

          wx.hideLoading()
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1500
          })
          _this.hideEditNickname()
        } else {
          wx.showModal({
            title: '请求失败',
            content: '保存用户信息失败',
          })
          return
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
    let session = JSON.parse(wx.getStorageSync('session'));
    console.log(session)

    let nickname = session.userInfo.nickname;
    let userLogo = session.userInfo.userLogo;
    let createTime = session.userInfo.createTime;
    let userCode = session.userInfo.userCode

    this.setData({
      nickname,
      userLogo,
      createTime,
      userCode,
      tempNickname: nickname,
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