// miniprogram/pages/new post/new post.js
Page({

  /**
   * Page initial data
   */
  data: {
    title: '',
    content: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
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
    var loadnuml = appInstance.loadnum
    db.collection('posts').add({
      data: {
        title: that.data.title,
        body: that.data.content,
        votes: 0,
        id: 0,
        upvoted: false,
        downvoted: false
      }
    })
  }
})