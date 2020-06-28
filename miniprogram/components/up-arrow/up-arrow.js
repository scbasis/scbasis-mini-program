// components/up-arrow/up-arrow.js
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
    upv: function(event){
      if ('upvote-button-' + this.properties.post.id == event.currentTarget.id){
        if (this.properties.post.upvoted){
          this.properties.post.votes--;
          this.properties.post.upvoted = false;
        }
        else {
          this.properties.post.votes++;
          this.properties.post.upvoted = true;
          if (this.properties.post.downvoted){
            this.properties.post.downvoted = false;
            this.properties.post.votes++;
          }
        }
      }
    
      this.setData({
        post: this.properties.post 
      })
      console.log(this.properties.post);
    }
  }
})
