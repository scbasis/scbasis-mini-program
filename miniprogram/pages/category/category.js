// miniprogram/pages/category/category.js
Page({

  /**
   * Page initial data
   */
  data: {
    category: {
      name: "The Comment Section™️",
      description: "THE comment section for SC BASIS posts. ",
      postIDs: ["p0000", "p0001"], // future use as reference to posts 
      posts: [ // retrieved from onLoad using postIDs?
        {
          title: "This is a test post",
          body: "This is the content of the test post. It would be significantly longer than the title. We also need to figure out how new lines are stored.",
          media: [
            {
              type: "image",
              id: "m0001",
              source: "../../images/placeholders/2meirl4meirl.jpg"
            },
            {
              type: "video",
              id: "m0002",
              source: "../../images/placeholders/yesyesyesyesno.mp4"
            }
          ],
          votes: 420,
          id: "p0000",
          upvoted: false,
          downvoted: false,
          new: true,
          hot: false,
          user: { // structure undecided
            name: "gayboi",
          },
          url: "../../pages/post/post",
          time: {
            year: "2020",
            month: "7",
            day: "30",
            hour: "20",
            minute: "01"
          },
          comments: [{
            text: "This is a comment",
            votes: 11,
            depth: 0,
            id: "c0000",
            children: [{
              text: "This is a reply to a comment",
              votes: 6,
              depth: 1, 
              id: "c0001",
              children: [{
                text: "This is the third",
                votes: -1,
                depth: 2, 
                id: "c0002",
                children: []
              }]
            }]
          }, {
            text: "Comment, but less popular",
            votes: 6,
            depth: 0, 
            id: "c0003",
            children: [{
              text: "No one likes you",
              votes: -12,
              depth: 1,
              id: "c0004",
              children: []
            }]
          }]
        },
        {
          title: "This is a test post 2",
          body: "This is the content of the test post. It would be significantly longer than the title. We also need to figure out how new lines are stored.",
          media: [
            {
              type: "video",
              id: "m0002",
              source: "../../images/placeholders/yesyesyesyesno.mp4"
            },
            {
              type: "image",
              id: "m0001",
              source: "../../images/placeholders/2meirl4meirl.jpg"
            },
          ],
          votes: 69,
          id: "p0001",
          upvoted: false,
          downvoted: false,
          new: false,
          hot: true,
          user: { // structure undecided
            name: "gayboi",
          },
          url: "../../pages/post/post",
          time: {
            year: "2020",
            month: "7",
            day: "30",
            hour: "20",
            minute: "01"
          },
          comments: [{
            text: "This is a comment",
            votes: 11,
            depth: 0,
            id: "c0000",
            children: [{
              text: "This is a reply to a comment",
              votes: 6,
              depth: 1, 
              id: "c0001",
              children: [{
                text: "This is the third",
                votes: -1,
                depth: 2, 
                id: "c0002",
                children: []
              }]
            }]
          }]
        }
      ]
    }
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