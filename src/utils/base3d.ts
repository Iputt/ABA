import * as THREE from 'three'
import { Camera, PerspectiveCamera, Scene } from 'three'
import { Renderer } from 'vue'

class Base3d {
  container: Element | null
  camera: THREE.PerspectiveCamera | null
  scene: THREE.Scene | null
  renderer: THREE.WebGLRenderer | null

  constructor(selector: string) {
    this.container = document.querySelector(selector)
    this.camera = null
    this.scene = null
    this.renderer = null
    this.init()
  }

  private init() {
    this.initScene()
    this.initCamera()
  }

  private initScene() {
    this.scene = new THREE.Scene()
  }

  private initCamera() {
    let respect = window.innerWidth / window.innerHeight
    this.camera = new THREE.PerspectiveCamera(80, respect, 1, 500)
    this.camera.position.set(-1.8, 0.6, 2.7)
  }

  private initRender() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    //设置屏幕像素比
    this.renderer.setPixelRatio(window.devicePixelRatio)
    //渲染的尺寸大小
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.container?.appendChild(this.renderer.domElement)
  }

  setEnvMap() {}
}

export default Base3d
