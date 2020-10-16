let classicBeh =  Behavior({
  properties: {
    img: String,
    content: String,
    hidden: Boolean
  },
  data: {
    myBehaviorData: {}
  },
  attached: function () { },
  methods: {
    myBehaviorMethod: function () { }
  }
})

export {classicBeh}