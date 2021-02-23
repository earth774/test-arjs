AFRAME.registerComponent("animate-nonglengsai", {
  init: function() {
    // load the .pngs
    let loader = new THREE.TextureLoader()
    this.pngArray = []
    this.pngArray.push(loader.load('images/nonglengsai/nonglengsai01.png'))
    this.pngArray.push(loader.load('images/nonglengsai/nonglengsai02.png'))
    this.pngArray.push(loader.load('images/nonglengsai/nonglengsai03.png'))
    this.pngArray.push(loader.load('images/nonglengsai/nonglengsai04.png'))
    this.pngArray.push(loader.load('images/nonglengsai/nonglengsai05.png'))

    this.el.addEventListener('loaded', e => {
      let mesh = this.el.getObject3D("mesh")
      this.material = mesh.material

      var i = 0
      this.id = setInterval(e => {
        if (i >= this.pngArray.length) i = 0;
        this.material.map = this.pngArray[i++]
        this.material.needsUpdate = true
      }, 5000)
    })
  },
  remove: function() {
    clearInterval(this.id);
    // free the memory
    for (let i = 0; i < this.pngArray.length; i++) {
      this.pngArray[i].dispose();
    }
  }
})


AFRAME.registerComponent("animate-kwanphayao", {
  init: function() {
    // load the .pngs
    let loader = new THREE.TextureLoader()
    this.pngArray = []
    this.pngArray.push(loader.load('images/kwanphayao/image1.png'))
    this.pngArray.push(loader.load('images/kwanphayao/image2.png'))
    this.pngArray.push(loader.load('images/kwanphayao/image3.png'))
    this.pngArray.push(loader.load('images/kwanphayao/image4.png'))
    this.pngArray.push(loader.load('images/kwanphayao/image5.png'))

    this.el.addEventListener('loaded', e => {
      let mesh = this.el.getObject3D("mesh")
      this.material = mesh.material

      var i = 0
      this.id = setInterval(e => {
        if (i >= this.pngArray.length) i = 0;
        this.material.map = this.pngArray[i++]
        this.material.needsUpdate = true
      }, 5000)
    })
  },
  remove: function() {
    clearInterval(this.id);
    // free the memory
    for (let i = 0; i < this.pngArray.length; i++) {
      this.pngArray[i].dispose();
    }
  }
})
