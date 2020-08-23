// components/comment-block/comment-block.js
Component({
  /**
   * Component properties
   */
  properties: {
    comment: {
      type: Object,
      value: undefined
    },
    recurse: {
      type: Boolean,
      value: true
    }
  },

  /**
   * Component initial data
   */
  data: {
    collapsed: false,
    display: "block",
    childrenHeight: 0
  },
  /**
   * Component lifecycle functions
   */
  lifetimes: {
    attached: function() {
      // this.getChildrenHeight();
    }
  },


  /**
   * Component methods
   */
  methods: {

    getChildrenHeight: function () { // not working: returns null for res
      wx.createSelectorQuery().select('.children-container').boundingClientRect((res) => {
        console.log(res);
        var childrenHeight = res.height;
        this.setData({"childrenHeight": childrenHeight});
      }).exec();
    },

    collapse: function(ev) {
      this.data.collapsed = !this.data.collapsed;
      // console.log("collapse() called", ev);
      if (this.data.collapsed) {
        this.setData({"display": "none"});
      } else {
        this.setData({"display": "block"});
      }
      // console.log(this.data.display);
      
    }
  }
})