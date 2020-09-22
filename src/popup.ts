const changeColor = document.getElementById('changeColor')
chrome.storage.sync.get('color', (data) => {
  if (changeColor) {
    changeColor.style.backgroundColor = data.color
    changeColor?.setAttribute('value', data.color)
  }
})

if (changeColor) {
  changeColor.onclick = (element) => {
    const color = (element?.target as HTMLInputElement).value
    console.log(element.target)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // @ts-ignore
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'document.body.style.backgroundColor = "' + color + '";',
      })
    })
  }
}
