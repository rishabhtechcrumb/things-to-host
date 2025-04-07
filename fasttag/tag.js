  function loadScriptTag(src, onload = () => { }, onError = () => { }) {
    const srciptTag = document.createElement('script')
    srciptTag.src = src;
    srciptTag.onload = onload
    document.head.appendChild(srciptTag)
}
loadScriptTag("https://cdn.jsdelivr.net/gh/rishabhtechcrumb/things-to-host@refs/heads/master/fastIma/player.js")
