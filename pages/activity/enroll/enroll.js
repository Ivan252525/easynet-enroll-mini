// pages/activity/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      form: [
        {
          formItemId: 1,
          type: 1,
          label: "姓名",
          must: 1,
        },
        {
          formItemId: 2,
          type: 1,
          label: "年龄",
          must: 0,
        },
        {
          formItemId: 3,
          type: 2,
          label: "性别",
          must: 1,
          options: ["男", "女", "其他"]
        },
        {
          formItemId: 7,
          type: 2,
          label: "性别",
          must: 1,
          options: ["男", "女", "其他"]
        },
        {
          formItemId: 4,
          type: 3,
          label: "地区",
          must: 1,
          options: ["蓬江区", "江海区", "新会区", "开平市", "恩平市", "台山市", "鹤山市"]
        },
        {
          formItemId: 5,
          type: 3,
          label: "地区",
          must: 1,
          options: ["蓬江区", "江海区", "新会区", "开平市", "恩平市", "台山市", "鹤山市"]
        },
        {
          formItemId: 6,
          type: 4,
          label: "喜欢",
          must: 1,
          options: ["苹果", "草莓", "橙子", "香蕉", "火龙果", "梨子", "奇异果"]
        },
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 如果表单中有picker类型的条目，把第一选项放到输入结果中
    let inputData = this.data.inputData;
    for (let i=0; i<this.data.data.form.length; i++) {
      let formItem = this.data.data.form[i];
      if (formItem.type == 3) {
        inputData[formItem.formItemId + ""] = formItem.options[0]
      }
    }
    this.setData({
      inputData: inputData
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