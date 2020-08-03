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

    upd: function(){
      const db = wx.cloud.database('scbasiscloud')
      const pt = this.properties.post
      db.collection('posts').doc(pt._id).update({
        data: {
          upvoted: pt.upvoted,
          downvoted: pt.downvoted,
          votes: pt.votes
        }
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

      this.upd()
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

      this.upd()
    }
  }
})