const app = getApp()

Page({
  data: {
    data: {
      banner: [
      ],
      recommendationList: [
      ],
      "historyList": [
      ],
      "businessList": [
      ]
    }
  },

  bindAllRecommendation: function () {
    wx.navigateTo({
      url: '../activity/list/activityList',
    })
  },

  bindRecommendationTap: function (e) {
    let activityId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../activity/detail/activityDetail?activityId=' + activityId
    })
  },

  bindTapBusiness: function (e) {
    let bussinessId = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../business/business?id=' + bussinessId
    })
  },

  tapBanner: function(e) {
    console.log(e)
    let bannerId = e.currentTarget.dataset.index;
    for (let i=0; i<this.data.data.banner.length; i++) {
      let banner = this.data.data.banner[i];
      if (banner.id == bannerId) {
        if (banner.type == 1) {
          // 跳转活动
          wx.navigateTo({
            url: '../activity/detail/activityDetail?activityId=' + banner.activityId
          })
        } else {
          // 跳转页面
          let url = banner.webUrl;
          let baseEncode = Base64.encode(url)
          wx.navigateTo({
            url: '../web/web?url=' + baseEncode
          })
        }

        return
      }
    }
  },

  // login: function () {
  //   wx.login({
  //     success: (res) => {
  //       console.log("登录成功！")
  //       console.log(res);
  //     },
  //     fail: (res) => {
  //       console.log("登录失败！")
  //       console.log(res);
  //     }
  //   })
  // },

  onLoad: function() {
    this.login();
    this.requestIndexData()
  },

  requestIndexData: function () {
    let _this = this;
    wx.request({
      url: app.globalData.url + '/server/index/index/data',
      method: "GET",
      success(res) {
        if (res.statusCode == 200 && res.data.code == 200) {
          _this.setData({
            data: res.data.data,
          })
        } else {
          wx.showModal({
            title: '请求失败',
            content: '获取首页数据失败',
          })
        }
      },
    })
  },

  login: function() {
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
  }
})


var Base64 = {
  // private property
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  // public method for encoding
  encode: function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64._utf8_encode(input);

    while (i < input.length) {

      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
  },

  // public method for decoding
  decode: function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

      enc1 = this._keyStr.indexOf(input.charAt(i++));
      enc2 = this._keyStr.indexOf(input.charAt(i++));
      enc3 = this._keyStr.indexOf(input.charAt(i++));
      enc4 = this._keyStr.indexOf(input.charAt(i++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      output = output + String.fromCharCode(chr1);

      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }

    }

    output = Base64._utf8_decode(output);

    return output;
  },

  // private method for UTF-8 encoding
  _utf8_encode: function (string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }

    return utftext;
  },

  // private method for UTF-8 decoding
  _utf8_decode: function (utftext) {
    var string = "";
    var i = 0;
    var c = 0;
    var c1 = 0;
    var c2 = 0;

    while (i < utftext.length) {

      c = utftext.charCodeAt(i);

      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if ((c > 191) && (c < 224)) {
        c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        i += 3;
      }

    }

    return string;
  }
}