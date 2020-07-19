// components/down-arrow/down-arrow.js
Component({
  /**
   * Component properties
   */
  properties: {
    post: {
      type: Object,
      value: undefined
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
    downv: function(event){
      if ('downvote-button-' + this.properties.post.id == event.currentTarget.id){
        this.triggerEvent('downv',{},{})
      }
    }
  }
})
