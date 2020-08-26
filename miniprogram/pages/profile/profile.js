// miniprogram/pages/profile/profile.js

const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    user: {
      name: "gayboi",
      profilePicture: "../../images/placeholders/profile pic.jpg",
      school: "BIGZ",
      grade: 10,
      city: "Guangzhou",
      // whatsUp: "this is a long what's up to test text wrapping poggers omegalul",
      whatsUpSet: false,
      whatsUp: "",
      totalPosts: 7,
      totalComments: 69,
      wechatID: "gayboi69420",
      instagram: "gayboiinsta696969",
      hottestPost: undefined // some kind of reference to the post - by id?
    }
  },

  getWhatsUpData: function(event){
    this.setData({
      "user.whatsUp": event.detail.value
    })
    console.log(this.data.user.whatsUp)
  },

  submitWhatsUp: function() {
    console.log('success')
    this.setData({
      "user.whatsUpSet": true
    });
  },

  editWhatsUp: function(){
    console.log('success')
    this.setData({
      "user.whatsUpSet": false
    });
  },

  getWeChatID: function (event) {
    this.setData({
      "user.wechatID": event.detail.value
    })
    console.log(this.data.user.wechatID)
  },

  submitWeChatID: function () {
    console.log('success')
    this.setData({
      "user.WeChatIDSet": true
    });
  },

  editWeChatID: function() {
    console.log('success')
    this.setData({
      "user.WeChatIDSet": false
    });
  },

  getInstagram: function (event) {
    this.setData({
      "user.instagram": event.detail.value
    })
    console.log(this.data.user.instagram)
  },

  submitInstagram: function () {
    console.log('success')
    this.setData({
      "user.InstagramSet": true
    });
  },

  editInstagram: function () {
    console.log('success')
    this.setData({
      "user.InstagramSet": false
      
    });
  },
   /**
   * Lifecycle function--Called when page load
   */

  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.loadMore()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  },
  /**Put this here because it was giving bugs without it */
  loadMore: function(){

  },

})