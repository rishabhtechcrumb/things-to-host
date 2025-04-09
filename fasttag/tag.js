function loadScriptTag(src, onload = () => { }, onError = () => { }) {
  const srciptTag = document.createElement('script')
  srciptTag.src = src;
  srciptTag.onload = onload
  document.head.appendChild(srciptTag)
}

const tagStartTime = performance.now();
window.TC_PERF = window.TC_PERF ?? {};
window.TC_PERF.tagStartTime = tagStartTime;

loadScriptTag("https://imasdk.googleapis.com/js/sdkloader/ima3.js")
loadScriptTag("https://cdn.jsdelivr.net/gh/rishabhtechcrumb/things-to-host@master/fastIma/player.js")

console.log(`TC_PERF:: ${performance.now() - window.TC_PERF.tagStartTime} tagloaded`);

