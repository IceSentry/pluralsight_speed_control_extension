import { h, render, Fragment } from 'preact'

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
    console.log(`setting new color ${color}`)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // @ts-ignore
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.body.style.backgroundColor = ${color};`,
      })
    })
  }
}

const App = () => (
  <Fragment>
    <h1>Hello from Preact and Typescript!</h1>
    <div id="buttonDiv"></div>
    <div>
      <p>Choose a different background color!</p>
    </div>
    <button id="changeColor"></button>
  </Fragment>
)

render(<App />, document.getElementById('root') as Element)
