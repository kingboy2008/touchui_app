// popover.js
export default {
  data () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false
    }
  },
  methods: {
    show3toggle (str) {
      if (str === 'hide') {
        this.show3 = false
      }
    },
    show4toggle (str) {
      if (str === 'hide') {
        this.show4 = false
      }
    },
    handleShow1 () {
      this.show1 = true
    },
    handleShow2 () {
      this.show2 = true
    },
    handleShow3 () {
      this.show3 = true
    },
    handleShow4 () {
      this.show4 = true
    },
    handleShow5 () {
      this.show5 = true
    },
    handleShow6 () {
      this.show6 = true
    },
    handleShow7 () {
      this.show7 = true
    },
    handleShow8 () {
      this.show8 = true
    },
    handleShow9 () {
      this.show9 = true
    },
    handleShow10 () {
      this.show10 = true
    },
    handleHide (text) {
      this.show1 = false
      this.show2 = false
      this.show3 = false
      this.show4 = false
      this.show5 = false
      this.show6 = false
      this.show7 = false
      this.show8 = false
      this.show9 = false
      this.show10 = false
      ui.showToast({
        title: text
      })
    }
  }
}
