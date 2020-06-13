// miniprogram/pages/home/home.js

Page({
  /**
   * Page initial data
   */
  data: {
    loadnum: 0,
    posts: []
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const db = wx.cloud.database()
    db.collection('Posts').skip(this.data.loadnum).limit(20).get({
      success: function(res){
        console.log(res.data)
        this.data.posts = this.data.posts + res.data
        console.log(res.data)
        console.log(this.data.loadnum)
        console.log(this.data.posts.data)
      }
    })
    this.data.loadnum = this.data.loadnum + 20
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
    const db = wx.cloud.database()
    exports.main = async (event, context) => {
      db.collection('posts').skip(loadnum).limit(20).get({
        success: function(res){
          this.data.posts.push(res.data)
          console.log(res.data)
          console.log(posts.data)
        }
      })
      loadnum = loadnum + 20
    }
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})