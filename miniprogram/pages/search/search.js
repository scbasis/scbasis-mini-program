// miniprogram/pages/search/search.js
Page({

  /**
   * Page initial data
   */
  data: {
    categoryResults: [
      {
        id: 'c0001',
        name: "r/commentsection",
        title: "Comment Section",
        description: "The official comment section for SCBASIS posts!",
        postCount: 0
      }
    ],
    postResults: [
      {
        id: '0001',
        title: 'the title',
        body: "the body text and this can be kind of long i don't really know what I'm doing",
        votes: 1,
        upvoted: false,
        downvoted: false
      }
    ],
    userResults: [
      {
        id: 'u0001',
        name: "Nekotizimo"
      }
    ]
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  }
})