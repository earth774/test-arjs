AFRAME.registerComponent('vidhandler', {
  init: function () {
    this.toggle = false;
    document.querySelector("#vid").pause(); //reference to the video
  },
  tick: function () {
    if (document.querySelector("#video-marker").object3D.visible == true) {
      if (!this.toggle) {
        this.toggle = true;
        document.querySelector("#vid").play();
      }
    } else {
      this.toggle = false;
      document.querySelector("#vid").pause();
    }
  }
});

AFRAME.registerComponent('canvas-updater', {
  dependencies: ['geometry', 'material'],

  tick: function () {
    var el = this.el;
    var material;

    material = el.getObject3D('mesh').material;
    if (!material.map) { return; }
    material.map.needsUpdate = true;
  }
});