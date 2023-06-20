import Vue from 'vue'

const fullScreen = (id) => {
  const element = id ? document.getElementById(id) : document.body
  const requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
  if (requestMethod) {
    requestMethod.call(element)
  }
}

const cancelFull = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen()
  }
}

const toggleFull = (id) => {
  return new Promise((resolve) => {
    if (document.fullscreen) {
      cancelFull()
    } else {
      fullScreen(id)
    }
    resolve(!document.fullscreen)
  })
}

Vue.prototype.$ToggleFullScreen = toggleFull
