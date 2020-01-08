// pages/activity/detail/activityDetail.js 
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    activityId: null,
    data: {
      activityInfo: {
        mainImage: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578128612612&di=a301d8ee613f4f1e4e9bfd0b97c13129&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D4073629333%2C1011902490%26fm%3D214%26gp%3D0.jpg",
        title: "喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪喜茶蹦迪",
        enrollNum: 1329,
        activityState: 2,
        activityStateStr: "报名中",
        activityTime: "01/05 12:00",
        startTime: "01/02 12:00",
        endTime: "02/02 11:00",
        address: "广东省开平市东汇村",
        phone: "12356748376",
        activityDetail: [
          "https://hbimg.huabanimg.com/ebd46e1c3d1ac2ad60224cdbf6ff963b00f71acd142b7d-cNDuuC_fw658"
        ],
      },
      business: {
        id: 1,
        logo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578117350788&di=cf8bfe3a2baf71fa3b5b3418d80a9f97&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0406%2FB6EBEFEB3603EE41D1AD687F6AFB01376C2B4C28_size19_w640_h640.jpeg",
        businessName: "喜茶喜茶",
        activityNum: 3,

      }
    }
  },

  bindTapBusiness: function () {
    wx.navigateTo({
      url: '../../business/business?id=' + this.data.data.business.id,
    })
  },

  bindTapEnroll: function () {
    wx.navigateTo({
      url: '../enroll/enroll?activityId=' + this.data.activityId,
    })
  },

  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    this.setData({
      activityId: options.activityId
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