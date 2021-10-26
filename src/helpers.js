export function copyText(text) {
  if (!text) return
  const tempTextarea = document.createElement('textarea')
  tempTextarea.value = text
  document.body.appendChild(tempTextarea)
  tempTextarea.select()
  document.execCommand('copy')
  document.body.removeChild(tempTextarea)
}
