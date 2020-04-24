// miniprogram/pages/home/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    posts: [{
      title: "Interesting Title 1",
      body: "Body text here- Lorem ipsum joihg kjhou oausdh oij kjhwo hsoduhf ouhl jknalkl oaihnfi- lngldm",
      votes: 420,
      id: "p0000",
      upvoted: false,
      downvoted: false
    }, {
        title: "Interesting Title 2",
        body: "More body text here- asdjfha aldsfjasdlf asfj sidjjkasg asfdulhowier",
        votes: 69,
        id: "p0001",
        upvoted: false,
        downvoted: false
      }, {
        title: "Interesting Title 3",
        body: "More body text here- asdjfha aldsfjasdlf asfj sidjjkasg asfdulhowier",
        votes: 0,
        id: "p0002",
        id: "0002",
        upvoted: false,
        downvoted: false
      },{
        title: "Interesting Title 4",
        body: "More body text here- asdjfha aldsadjjkasg asfdulhowier",
        votes: -20,
        id: "p0003",
        upvoted: false,
        downvoted: false
      }]
  }, upv: function(event){
    for (let i = 0; i < this.data.posts.length; i++){
      if ('upvote-button-' + this.data.posts[i].id == event.currentTarget.id){
        if (this.data.posts[i].upvoted){
          this.data.posts[i].votes--;
          this.data.posts[i].upvoted = false;
        }
        else {
          this.data.posts[i].votes++;
          this.data.posts[i].upvoted = true;
          if (this.data.posts[i].downvoted){
            this.data.posts[i].downvoted = false;
            this.data.posts[i].votes++;
          }
        }
        break;
      }
    }
    this.setData({
      posts: this.data.posts
    })
  },
  downv: function(event){
    for (let i = 0; i < this.data.posts.length; i++){
      if ('downvote-button-' + this.data.posts[i].id == event.currentTarget.id){
        if (this.data.posts[i].downvoted){
          this.data.posts[i].votes++
          this.data.posts[i].downvoted = false;
        }
        else {
          this.data.posts[i].votes--;
          this.data.posts[i].downvoted = true;
          if (this.data.posts[i].upvoted){
            this.data.posts[i].upvoted = false;
            this.data.posts[i].votes--;
          }
        }
        break;
      }
    }
    this.setData({
      posts: this.data.posts
    })
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