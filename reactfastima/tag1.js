  // window.TC_YAAS.setup("root")
  function loadScriptTag(src, onload = () => { }, onError = () => { }) {
      const srciptTag = document.createElement('script')
      srciptTag.src = src;
      srciptTag.onload = onload
      document.head.appendChild(srciptTag)
  }
  loadScriptTag("https://imasdk.googleapis.com/js/sdkloader/ima3.js")
  loadScriptTag("https://cdn.jsdelivr.net/gh/rishabhtechcrumb/things-to-host@master/reactfastima/player.js",()=>{
      TC_YAAS.setup("root");
  })
