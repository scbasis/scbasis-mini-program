// miniprogram/pages/new post/new post.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    title: '',
    content: '',
    categories: [
      "None :P",
      "The Comment Section (r/commentsection)",
      "2meirl4meirl (r/2meirl4meirl)"
    ],
    index: 0,
    userInfo: {}, 
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // categories: [
    //   {
    //     title: "Choose Category",
    //     name: "",
    //     thumbnail: "none i guess", 
    //   },
    //   { // category objects
    //     title: "The Comment Section",
    //     name: "r/commentsection",
    //     thumbnail: "maybe?"
    //   }
    // ]
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
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
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  /***
   * Called when user enters the title
   */
  getTitleData: function(event){
    this.setData({
      title: event.detail.value
    })
    console.log(this.data.title)
  },
  getContentData: function(event){
    this.setData({
      content: event.detail.value
    })
    console.log(this.data.content)
  },
  createPost: function(event){
    const db = wx.cloud.database('scbasiscloud')
    var that = this
    const date = Date.now()
    console.log("createPost: called")
    
    db.collection('posts').count({success: function(res) {
      db.collection('posts').add({
        data: {
          title: that.data.title,
          body: that.data.content,
          votes: 0,
          id: res.total,
          upvoted: false,
          downvoted: false,
          time: {
            year: date.getFullYear().toString(10),
            month: date.getMonth().toString(10).padStart(2, '0'),
            day: date.getDate().toString(10).padStart(2, '0'),
            hour: date.getHours().toString().padStart(2, '0'),
            minute: date.getMinutes().toString().padStart(2, '0')
          },
          user: this.userInfo.nickName,
          comments: []
        }
      })
      console.log(res.total)
    }})
    
    wx.redirectTo({
      url: '../home/home',
    })
  },
  bindPickerChange: function(e) {
    console.log('pickerA selection change is sent, carrying the value ', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})