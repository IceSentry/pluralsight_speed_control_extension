/*global chrome*/

import { h, render, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import ColorPicker from './components/ColorPicker'

const App = () => {
  const [color, setColor] = useState('')

  useEffect(() => {
    chrome.storage.sync.get('color', (data) => {
      setColor(data.color)
    })
  }, [])

  const onClick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id as number
      chrome.tabs.executeScript(tabId, {
        code: `document.body.style.backgroundColor = '${color}';`,
      })
    })
  }

  return (
    <Fragment>
      <ColorPicker setColor={setColor} />
      <button
        onClick={onClick}
        value={color}
        style={{ backgroundColor: color }}
      />
    </Fragment>
  )
}

render(<App />, document.getElementById('root') as Element)
