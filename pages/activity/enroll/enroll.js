const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityId: null,
    data: {
      form: [
      ]
    },
    selectIndex: {
      '4': 0,
      '5': 0
    },
    inputData: {}
  },

  bindInput: function (e) {
    let formItemId = parseInt(e.currentTarget.dataset.formitemid);
    let inputStr = e.detail.value;
    let inputData = this.data.inputData;
    inputData[formItemId + ""] = inputStr;
    this.setData({
      inputData: inputData
    })
  },

  bindRadioChange: function (e) {
    let formItemId = parseInt(e.currentTarget.dataset.formitemid);
    let inputStr = e.detail.value;
    let inputData = this.data.inputData;
    inputData[formItemId + ""] = inputStr;
    this.setData({
      inputData: inputData
    })
  },

  bindPickerChange: function(e) {
    let formItemId = parseInt(e.currentTarget.dataset.formitemid);
    let selectIndex = this.data.selectIndex;
    let selectValue = parseInt(e.detail.value);
    selectIndex[formItemId + ''] = selectValue;
    let value = null;
    for (let i=0; i<this.data.data.form.length; i++) {
      let formItem = this.data.data.form[i];
      if (formItem.formItemId == formItemId) {
        value = formItem.options[selectValue];
      }
    }
    let inputData = this.data.inputData;
    inputData[formItemId + ""] = value;
    this.setData({
      selectIndex: selectIndex,
      inputData: inputData
    })
  },

  bindCheckboxChange: function (e) {
    let formItemId = parseInt(e.currentTarget.dataset.formitemid);
    let optionList = e.detail.value;
    let value = null;
    if (optionList.length > 0) {
      value = optionList.join("|");
    }
    let inputData = this.data.inputData;
    inputData[formItemId + ""] = value;
    this.setData({
      inputData: inputData
    })
  },

  bindSaveInput: function () {
    console.log(this.data.inputData)
    let inputData = this.data.inputData;
    for (let i=0; i<this.data.data.form.length; i++) {
      let formItem = this.data.data.form[i];
      let input = inputData[formItem.formItemId + ""];
      if (formItem.must == 1) {
        if (!input || input.trim() == '') {
          wx.showModal({
            title: "提交失败",
            content: formItem.label + "还没有填写",
            showCancel: false,
          })
          return;
        }
      }
    }

    let inputItems = [];
    for (let formItemId in inputData) {
      inputItems.push({
        "formItemId": formItemId,
        "value": inputData[formItemId]
      })
    }
    let postData = {
      "activityId": this.data.activityId,
      "formItems": inputItems
    }

    wx.showLoading({
      title: "",
    })

    wx.request({
      url: app.globalData.url + '/server/enroll/enroll/enroll',
      method: "POST",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      data: postData,
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          wx.redirectTo({
            url: '../success/success',
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

  getViewData() {
    let _this = this;

    wx.showLoading({
      title: "",
    })

    wx.request({
      url: app.globalData.url + '/server/activity/activity/form/' + _this.data.activityId,
      method: "GET",
      header: {
        'token': JSON.parse(wx.getStorageSync('session')).token
      },
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          let data = _this.data.data;
          data.form = res.data.data;
          _this.setData({
            data: data,
          })

          let inputData = _this.data.inputData;
          for (let i = 0; i < _this.data.data.form.length; i++) {
            let formItem = _this.data.data.form[i];
            if (formItem.type == 3) {
              inputData[formItem.formItemId + ""] = formItem.options[0]
            }
          }
          _this.setData({
            inputData: inputData
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
      activityId: options.activityId
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