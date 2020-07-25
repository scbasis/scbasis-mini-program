// components/post-block/post-block.js
Component({
  /**
   * Component properties
   */
  properties: {
    post: {
      type: Object,
      value: undefined,
    }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    toPost: function () {
      wx.navigateTo({
        url: '../post/post'
      })
    },

    upv(event) {
      if (this.properties.post.upvoted) {
        this.properties.post.votes--;
        this.properties.post.upvoted = false;
      } else {
        this.properties.post.votes++;
        this.properties.post.upvoted = true;
        if (this.properties.post.downvoted) {
          this.properties.post.downvoted = false;
          this.properties.post.votes++;
        }
      }

      this.setData({
        post: this.properties.post
      })

      var that = this
      wx.cloud.callFunction({
        name: 'update',
        data: {
          post: that.properties.post
        }
      })
    },

    downv(event) {
      if (this.properties.post.downvoted) {
        this.properties.post.votes++
        this.properties.post.downvoted = false;
      } else {
        this.properties.post.votes--;
        this.properties.post.downvoted = true;
        if (this.properties.post.upvoted) {
          this.properties.post.upvoted = false;
          this.properties.post.votes--;
        }
      }
      this.setData({
        post: this.properties.post
      })

      var that = this
      wx.cloud.callFunction({
        name: 'update',
        data: {
          post: that.properties.post
        }
      })
    }
  }
})